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

import * as Classes from '../Classes';
import UserProfile from './UserProfile';
import AllTeams from './AllTeams';
import Activity from './Activity';

export enum TeamPageTab {
  all = 'all',
  favourites = 'favourites',
  archived = 'archived'
}

interface TeamPageProps {
  defaultTab: TeamPageTab;
}

interface TeamPageState {
  selectedTab: TeamPageTab
}

class TeamsPage extends React.Component<TeamPageProps, TeamPageState> {
  constructor(props: TeamPageProps) {
    super(props);
    this.state = {
      selectedTab: this.props.defaultTab
    }
  }

  private handleChangeTab = (event: React.ChangeEvent<{}>, newValue: TeamPageTab) => {
    this.setState({ ...this.state,  selectedTab: newValue });
  };

  public render() {
    return (
      <div className={Classes.teamsPage}>
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
                <Badge badgeContent={3} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <UserProfile />
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
          <AllTeams mode={this.state.selectedTab} />
          <Activity />
        </div>
      </div>
    );
  }
};

export default TeamsPage;