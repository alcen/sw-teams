import * as React from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import * as Classes from '../Classes';
import TeamCard from './TeamCard';
import { TeamPageTab } from './TeamsPage';
import Team from '../util/Team';

export interface AllTeamsProps {
  teamsToDisplay: Team[],
  numberOfTotalTeams: number,
  mode: TeamPageTab,
  updateTeams: (newTeams: Team[]) => void
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

const AllTeams: React.FunctionComponent<AllTeamsProps> = (props: AllTeamsProps) => {
  // makes an unique function for handling favourites for each team
  const createFavouriteHandler = (teamIndex: number) => {
    const oldValue = props.teamsToDisplay[teamIndex].isFavourite;
    const setFavouriteInTeamArray = (team: Team, index: number) =>
      index === teamIndex
        ? { ...team, isFavourite: !oldValue }
        : team;
    return () => props.updateTeams(props.teamsToDisplay.map(setFavouriteInTeamArray));
  }

  const teamCardConstructor = (teamAndOriginalIndex: [Team, number], index: number) => {
    const team = teamAndOriginalIndex[0];
    const originalIndex = teamAndOriginalIndex[1];
    return <TeamCard
      displayedTeam={team}
      key={index}
      handleFavourite={createFavouriteHandler(originalIndex)}
    />
  };

  function filterTeams() {
    // keep the original index in a pair before filtering
    // so createFavouriteHandler will know which index
    // to set in the original array of TeamsPage
    if (props.mode === TeamPageTab.favourites) {
      return props.teamsToDisplay
        .map((team, index) => [team, index] as [Team, number])
        .filter(teamPair => teamPair[0].isFavourite)
        .map(teamCardConstructor);
    } else if (props.mode === TeamPageTab.archived) {
      return props.teamsToDisplay
        .map((team, index) => [team, index] as [Team, number])
        .filter(teamPair => teamPair[0].isArchived)
        .map(teamCardConstructor);
    } else {
      return props.teamsToDisplay
        .map((team, index) => [team, index] as [Team, number])
        .map(teamCardConstructor);
    }
  }
  const teamCards = filterTeams();

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
          {getTitle(props.mode)}
        </Typography>
        <Typography variant="h6" style={{ float: 'right' }}>
          Showing {teamCards.length} out of {props.numberOfTotalTeams} teams
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

export default AllTeams;