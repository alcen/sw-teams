import * as React from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import * as Classes from '../Classes';
import TeamCard from './TeamCard';
import { TeamPageTab } from './TeamsPage';
import Team from '../util/Team';

export interface AllTeamsProps {
  teamsToDisplay: Team[],
  mode: TeamPageTab
}

export interface AllTeamsState {
  displayedTeams: Team[],
  numberDisplayed: number
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
      numberDisplayed: 5,
      displayedTeams: props.teamsToDisplay
    }
  }

  private totalTeams = this.props.teamsToDisplay.length;

  public render() {
    // makes an unique function for handling favourites for each team
    const createFavouriteHandler = (teamIndex: number) => {
      return () => this.setState((prevState: AllTeamsState) => {
        const oldValue = prevState.displayedTeams[teamIndex].isFavourite;
        const setFavouriteInTeamArray = (team: Team, index: number) =>
          index === teamIndex
            ? { ...team, isFavourite: !oldValue }
            : team;
        return {
          displayedTeams: prevState.displayedTeams.map(setFavouriteInTeamArray)
        };
      });
    }

    const teamCardConstructor = (team: Team, index: number) => {
      return <TeamCard
        displayedTeam={team}
        key={index}
        handleFavourite={createFavouriteHandler(index)}
      />
    };
    const teamCards = this.state.displayedTeams.map(teamCardConstructor);
   
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
            Showing {this.state.numberDisplayed} out of {this.totalTeams} teams
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
            {teamCards}
          </div>
        </div>
      </div>
    );
  }
};

export default AllTeams;