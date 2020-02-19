import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import SearchIcon from '@material-ui/icons/Search';

import UserProfile from './UserProfile';
import AllTeams from './AllTeams';
import Activity from './Activity';
import CreateTeamMenu from './CreateTeamMenu';

import AppData from '../util/AppData';
import renameKeys from '../util/DataRenamer';
import defaultFont from '../util/Font';
import Team from '../util/Team';

import ErrorScreen from '../panels/ErrorScreen';
import LoadingScreen from '../panels/LoadingScreen';
import * as Classes from '../Classes';

export enum TeamPageTab {
  all = 'all',
  favourites = 'favourites',
  archived = 'archived',
  search = 'search'
}

interface TeamPageProps {
  defaultTab: TeamPageTab;
}

interface TeamPageState {
  didLoadingFail: boolean,
  loadProgress: number,
  selectedTab: TeamPageTab,
  data?: AppData,
  teams?: Team[],
  searchTerm?: string
  previousTabBeforeSearch?: TeamPageTab
  isCreateTeam: boolean
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
    const loadedData = renameKeys(json) as AppData;
    updateProgress(100);
    updateData(loadedData);
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
      selectedTab: this.props.defaultTab,
      isCreateTeam: false 
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

  private handleSearch = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const searchTerm: string = event.target.value;
    if (searchTerm) {
      this.setState(prevState => ({
        ...prevState,
        selectedTab: TeamPageTab.search,
        searchTerm,
        previousTabBeforeSearch: prevState.selectedTab === TeamPageTab.search
          ? prevState.previousTabBeforeSearch
          : prevState.selectedTab
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        selectedTab: prevState.previousTabBeforeSearch || this.props.defaultTab,
        searchTerm: undefined
      }));
    }
  };

  private handleClearSearch = () => {
    this.setState((prevState: TeamPageState) => ({
      ...prevState,
      searchTerm: "",
      selectedTab: prevState.previousTabBeforeSearch || this.props.defaultTab
    }));
  }

  /**
   * Given an array of Teams, add a new Team to it and
   * return the resultant array
   */
  private addNewTeam(teams: Team[], newTeam: Team) {
    teams.unshift(newTeam);
    return teams;
  }

  /**
   * Adds a Team to the data in the state
   */
  private handleAddTeam = (newTeam: Team) => {
    this.setState((prevState: TeamPageState) => ({
      ...prevState,
      isCreateTeam: false,
      data: prevState.data
        ? {
            ...prevState.data,
            teams: this.addNewTeam(prevState.data.teams, newTeam)
          }
        : undefined
    }));
  };

  private openCreateTeamMenu = () => {
    this.setState((prevState: TeamPageState) => ({
      ...prevState,
      isCreateTeam: true
    }));
  };

  private closeCreateTeamMenu = () => {
    this.setState((prevState: TeamPageState) => ({
      ...prevState,
      isCreateTeam: false
    }));
  };

  private updateProgress = (progress: number): void => {
    this.setState({ ...this.state, loadProgress: progress });
  };

  private updateData = (loadedData: AppData): void => {
    this.setState({ ...this.state, data: loadedData })
  };

  public componentDidMount() {
    loadJsonData(this.updateProgress, this.updateData)
      .catch(error => {
        console.error(error);
        this.setState({ ...this.state, didLoadingFail: true })
      });
  }

  // avoid error: type 'string' not assignable to type 'unset' | ...
  private unset: 'unset' = 'unset';
  private tabStyle = {
    minWidth: 'unset',
    marginLeft: '25px',
    fontFamily: defaultFont,
    fontSize: '18px',
    lineHeight: '22px',
    // disable all caps on tabs
    textTransform: this.unset
  };

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
                  fontFamily: defaultFont
                }}
              >
                Narwhal
              </Typography>
              <Typography
                variant="h6"
                style={{
                  display: 'inline',
                  paddingLeft: '5%',
                  fontFamily: defaultFont
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
              <Typography
                variant="h6"
                style={{
                  fontFamily: defaultFont
                }}
              >
                  Teams
              </Typography>
            </div>
            <div className={Classes.teamsCreateATeam}>
              <Button variant="contained" onClick={this.openCreateTeamMenu}>
                <AddIcon style={{ paddingRight: '5px' }} />
                Create New Team
              </Button>
            </div>
          </AppBar>
          <AppBar className={Classes.teamsTabBar}>
            <div className={Classes.teamsTabs}>
              {this.state.selectedTab === TeamPageTab.search
                ? undefined
                : <Tabs
                    value={this.state.selectedTab}
                    onChange={this.handleChangeTab}
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: '#0083e3'
                      } 
                    }}
                  >
                    <Tab value={TeamPageTab.all} label="All" style={this.tabStyle} />
                    <Tab value={TeamPageTab.favourites} label="Favourites" style={this.tabStyle} />
                    <Tab value={TeamPageTab.archived} label="Archived" style={this.tabStyle} />
                  </Tabs>
              }
            </div>
            <div className={Classes.teamsSearch}>
              <div
                style={{
                  display: 'inline-flex'
                }}
              >
                {this.state.selectedTab === TeamPageTab.search
                  ? <div style={{
                      float: 'right',
                      height: '48px',
                    }}>
                      <Button
                        variant="contained"
                        onClick={this.handleClearSearch}
                      >
                        Clear Search
                      </Button>
                    </div>
                  : undefined
                }
                <div>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search team name…"
                  onChange={this.handleSearch}
                  value={this.state.searchTerm}
                />
              </div>
            </div>
          </AppBar>
        </div>
        <div className={Classes.teamsMain}>
          <AllTeams
            mode={this.state.selectedTab}
            teamsToDisplay={this.state.data.teams}
            numberOfTotalTeams={this.state.data.teams.length}
            updateTeams={this.handleUpdateTeams}
            searchTerm={this.state.searchTerm}
          />
          <Activity activitiesToDisplay={this.state.data.activities} />
        </div>
        <CreateTeamMenu
          handleCloseMenu={this.closeCreateTeamMenu}
          handleCreateTeam={this.handleAddTeam}
          hidden={!this.state.isCreateTeam}
          numberOfTeams={this.state.data.teams.length}
        />
      </div>
    : this.state.didLoadingFail
      ? <ErrorScreen />
      : <LoadingScreen progress={this.state.loadProgress} />
  }
};

export default TeamsPage;