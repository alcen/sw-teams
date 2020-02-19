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
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';
import CloseIcon from '@material-ui/icons/Close';
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
    fontWeight: 'bold' as 'bold',
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
              <div
                style={{
                  display: 'flex',
                  height: '100%'
                }}
              >
                <div
                  style={{
                    // give a line between Narwhal and Teams
                    borderRight: '1px solid #e2e2e2',
                    paddingLeft: '40px',
                    paddingRight: '40px',
                    paddingTop: '30px',
                    paddingBottom: '30px'
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontFamily: defaultFont,
                      fontSize: '18px',
                      lineHeight: '22px',
                      color: '#1a1919',
                      mixBlendMode: 'normal',
                      opacity: 0.5
                    }}
                  >
                    <b>NARWHAL</b>
                  </Typography>
                </div>
                <div
                  style={{
                    paddingLeft: '40px',
                    paddingTop: '30px'
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontFamily: defaultFont,
                      fontSize: '18px',
                      lineHeight: '22px',
                      color: '#000000'
                    }}
                  >
                    Teams
                  </Typography>
                </div>
              </div>
            </div>
            <div className={Classes.teamsTopUser}>
              <div>
                <IconButton>
                  <Badge badgeContent={this.state.data.currentUser.notificationsCount}>
                    <AssignmentSharpIcon
                      style={{
                        width: '36px',
                        height: '36px'
                      }}
                    />
                  </Badge>
                </IconButton>
                <UserProfile userToDisplay={this.state.data.currentUser} />
              </div>
            </div>
          </AppBar>
          <AppBar className={Classes.teamsCreateBar}>
            <div className={Classes.teamsCreateBarIcon}>
              <LocationCityIcon
                style={{
                  fontSize: '35px',
                  color: '#a4a6a8',
                  marginRight: '9px',
                  paddingTop: '2px'
                }}
              />
              <Typography
                variant="h6"
                style={{
                  fontFamily: defaultFont,
                  fontSize: '30px',
                  lineHeight: '36px',
                  color: '#1a1919'
                }}
              >
                <b>Teams</b>
              </Typography>
            </div>
            <div className={Classes.teamsCreateATeam}>
              <Button
                variant="contained"
                onClick={this.openCreateTeamMenu}
                style={{
                  fontFamily: defaultFont,
                  fontSize: '14px',
                  lineHeight: '16px'
                }}
              >
                <AddIcon style={{ paddingRight: '5px' }} />
                <b>Create New Team</b>
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
                      paddingRight: '10px'
                    }}>
                      <Button
                        variant="contained"
                        onClick={this.handleClearSearch}
                        style={{
                          fontFamily: defaultFont,
                          backgroundColor: '#ba1029',
                          color: '#ffffff',
                          boxShadow: 'unset',
                          paddingLeft: '9px',
                          paddingRight: '11px'
                        }}
                      >
                        <CloseIcon style={{ paddingRight: '5px' }} />
                        <div style={{ paddingBottom: '1px' }}>
                          <b>Clear</b>
                        </div>
                      </Button>
                    </div>
                  : undefined
                }
                <div
                  style={{
                    color: '#999999',
                    marginRight: '15px',
                    paddingTop: '7px'
                  }}
                >
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search team name…"
                  onChange={this.handleSearch}
                  value={this.state.searchTerm}
                  style={{
                    fontFamily: defaultFont,
                    fontSize: '16px',
                    fontWeight: 'bold',
                    lineHeight: '19px',
                    color: '#999999',
                    height: '36.3333px'
                  }}
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