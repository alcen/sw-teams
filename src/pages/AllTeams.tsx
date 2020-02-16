import * as React from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import * as Classes from '../Classes';
import TeamCard from './TeamCard';
import { TeamPageTab } from './TeamsPage';

export interface AllTeamsProps {
  mode: TeamPageTab
}

export interface AllTeamsState {
  favouriteAxa: boolean,
  favouriteGrab: boolean
}

function getTitle(mode: TeamPageTab): string {
  if (mode === TeamPageTab.all) {
    return "All Teams";
  } else if (mode === TeamPageTab.favourites) {
    return "Favourites";
  } else if (mode === TeamPageTab.archived) {
    return "Archived";
  } else {
    return "? Teams";
  }
}

class AllTeams extends React.Component<AllTeamsProps, AllTeamsState> {
  constructor(props: AllTeamsProps) {
    super(props);
    this.state = {
      favouriteAxa: true,
      favouriteGrab: false
    }
  }

  private numberOfTeams = 5;
  private totalTeams = 65;

  public render() {
    const toggleFavouriteAxa = () => {
      this.setState({ ...this.state, favouriteAxa: !this.state.favouriteAxa });
    }

    const toggleFavouriteGrab = () => {
      this.setState({ ...this.state, favouriteGrab: !this.state.favouriteGrab });
    }

    const axa = <TeamCard
      name='Axa'
      iconSource='https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/966/twitter/wataten-avatar.jpg?1546777130'
      description='AXA is a French multinational insurance firm headquartered in the 8th random place and random time etc'
      numberOfCampaigns={20}
      numberOfLeads={1500}
      key={1}
      isFavourite={this.state.favouriteAxa}
      isArchived={false}
      date='28 July 2018'
      handleFavourite={toggleFavouriteAxa}
    />;

    const grab = (key: number) => <TeamCard
      key={key}
      name='Grab'
      iconSource='https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/895/twitter/revue-starlight-a.png?1531195655'
      description='GrabTaxi Holdings Pte Ltd is a Singapore-based technology company that offers rides and other stuff but mostly rides to people'
      numberOfCampaigns={23}
      numberOfLeads={2000}
      isFavourite={this.state.favouriteGrab}
      isArchived={true}
      handleFavourite={toggleFavouriteGrab}
    />;
    
    return (
      <div
        className={Classes.allTeams}
        style={{
          width: '70%'
        }}
      >
        <div style={{
            display: 'inline-block', 
            position: 'relative',
            width: '100%'
          }}
        >
          <Typography variant="h6" style={{ float: 'left' }}>
            {getTitle(this.props.mode)}
          </Typography>
          <Typography variant="h6" style={{ float: 'right' }}>
            Showing {this.numberOfTeams} out of {this.totalTeams} teams
          </Typography>
        </div>
        <Divider/>
        <div style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            display: 'flex', 
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'space-between',
            justifyContent: 'center'
          }}>
            {[axa, grab(2), grab(3), grab(4), grab(5)]}
          </div>
        </div>
      </div>
    );
  }
};

export default AllTeams;