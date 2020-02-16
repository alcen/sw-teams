import * as React from 'react';

import * as Classes from '../Classes';
import TeamCard from './TeamCard';

export interface AllTeamsState {
  favourite: boolean
}

class AllTeams extends React.Component<{}, AllTeamsState> {
  constructor(props: {}) {
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
      <div className={Classes.allTeams}>
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
    );
  }
};

export default AllTeams;