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
  favourite: boolean
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
      favourite: true
    }
  }


  public render() {
    const toggleFavourite = () => {
      this.setState({ ...this.state, favourite: !this.state.favourite });
    }

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
            Showing 65 out of 65 teams
          </Typography>
        </div>
        <Divider/>
        <div style={{
            alignItems: 'center',
            display: 'flex', 
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          <TeamCard
            name='Axa'
            iconSource='https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/966/twitter/wataten-avatar.jpg?1546777130'
            description='AXA is a French multinational insurance firm headquartered in the 8th random place and random time etc'
            numberOfCampaigns={20}
            numberOfLeads={1500}
            isFavourite={this.state.favourite}
            isArchived={false}
            date='28 July 2018'
            handleFavourite={toggleFavourite}
          />
        </div>
      </div>
    );
  }
};

export default AllTeams;