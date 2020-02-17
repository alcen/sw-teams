import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import NotificationsIcon from '@material-ui/icons/Notifications';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import SearchIcon from '@material-ui/icons/Search';

import UserProfile from './UserProfile';
import AllTeams from './AllTeams';
import Activity from './Activity';
import AppData from '../util/AppData';
import Team from '../util/Team';
import renameKeys from '../util/DataRenamer';
import ErrorScreen from '../panels/ErrorScreen';
import LoadingScreen from '../panels/LoadingScreen';
import * as Classes from '../Classes';

export enum TeamPageTab {
  all = 'all',
  favourites = 'favourites',
  archived = 'archived'
}

interface TeamPageProps {
  defaultTab: TeamPageTab;
}

interface TeamPageState {
  didLoadingFail: boolean,
  loadProgress: number,
  selectedTab: TeamPageTab,
  data?: AppData,
  teams?: Team[]
}

async function loadJsonData(
  updateProgress: (progress: number) => void,
  updateData: (loadedData: AppData) => void
): Promise<any> {
  updateProgress(10);
  try {
    const response = await fetch('../data/data.json');
    updateProgress(50);
    const json = await response.json();
    console.log(json);
    const loadedData = renameKeys(json) as AppData;
    updateProgress(100);
    updateData(loadedData);
    console.log(loadedData);
  } catch (e) {
    updateProgress(0);
    console.error(e);
    throw new Error("Could not load JSON from file");
  }
}

class TeamsPage extends React.Component<TeamPageProps, TeamPageState> {
  constructor(props: TeamPageProps) {
    super(props);
    this.state = {
      didLoadingFail: false,
      loadProgress: 0,
      selectedTab: this.props.defaultTab
    }
  }

  private handleUpdateTeams = (teams: Team[]) => {
    this.setState((prevState: TeamPageState) => 
      prevState.data
        ? ({ ...prevState,
            data: {
              activities: prevState.data.activities,
              currentUser: prevState.data.currentUser,
              teams
            }})
        : prevState
    );
  };

  private handleChangeTab = (event: React.ChangeEvent<{}>, newValue: TeamPageTab) => {
    this.setState({ ...this.state,  selectedTab: newValue });
  };

  private updateProgress = (progress: number): void => {
    this.setState({ ...this.state, loadProgress: progress });
  }

  private updateData = (loadedData: AppData): void => {
    this.setState({ ...this.state, data: loadedData })
  }

  public componentDidMount() {
    loadJsonData(this.updateProgress, this.updateData)
      .catch(error => {
        console.error(error);
        this.setState({ ...this.state, didLoadingFail: true })
      });
  }

  public render() {
    return this.state.data
      ? <div className={Classes.teamsPage}>
        <div className={Classes.teamsAllBars}>
          <AppBar className={Classes.teamsTopBar}>
            <div className={Classes.teamsTopWords}>
              <Typography
                variant="h6"
                style={{
                  // give a line between Narwhal and Teams
                  borderRight: '0.1em solid black',
                  display: 'inline',
                  paddingRight: '5%',
                }}
              >
                Narwhal
              </Typography>
              <Typography
                variant="h6"
                style={{
                  display: 'inline',
                  paddingLeft: '5%'
                }}
              >
                Teams
              </Typography>
            </div>
            <div className={Classes.teamsTopUser}>
              <IconButton>
                <Badge
                  badgeContent={this.state.data.currentUser.notificationsCount}
                  color="secondary"
                >
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <UserProfile userToDisplay={this.state.data.currentUser} />
            </div>
          </AppBar>
          <AppBar className={Classes.teamsCreateBar}>
            <div className={Classes.teamsCreateBarIcon}>
              <LocationCityIcon />
              <Typography variant="h6">
                  Teams
              </Typography>
            </div>
            <div className={Classes.teamsCreateATeam}>
              <Button variant="contained">
                Create New Team
              </Button>
            </div>
          </AppBar>
          <AppBar className={Classes.teamsTabBar}>
            <div className={Classes.teamsTabs}>
              <Tabs
                value={this.state.selectedTab}
                onChange={this.handleChangeTab}
              >
                <Tab value={TeamPageTab.all} label="All" />
                <Tab value={TeamPageTab.favourites} label="Favourites" />
                <Tab value={TeamPageTab.archived} label="Archived" />
              </Tabs>
            </div>
            <div className={Classes.teamsSearch}>
              <div>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search team name…"
              />
            </div>
          </AppBar>
        </div>
        <div className={Classes.teamsMain}>
          <AllTeams
            mode={this.state.selectedTab}
            teamsToDisplay={this.state.data.teams}
            numberOfTotalTeams={this.state.data.teams.length}
            updateTeams={this.handleUpdateTeams}
          />
          <Activity activitiesToDisplay={this.state.data.activities} />
        </div>
      </div>
    : this.state.didLoadingFail
      ? <ErrorScreen />
      : <LoadingScreen progress={this.state.loadProgress} />
  }
};

export default TeamsPage;