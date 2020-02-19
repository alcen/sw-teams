import * as React from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import * as Classes from '../Classes';
import TeamCard from './TeamCard';
import { TeamPageTab } from './TeamsPage';
import Team from '../util/Team';
import defaultFont from '../util/Font';

export interface AllTeamsProps {
  teamsToDisplay: Team[],
  numberOfTotalTeams: number,
  mode: TeamPageTab,
  updateTeams: (newTeams: Team[]) => void,
  searchTerm?: string
}

/**
 * Gets the title text for the current mode
 * 
 * @param mode The mode of the All Teams
 * @param searchTerm The search term to be displayed
 *     when in search mode
 */
function getTitle(mode: TeamPageTab, searchTerm?: string): string {
  if (mode === TeamPageTab.all) {
    return "All Teams";
  } else if (mode === TeamPageTab.favourites) {
    return "Favourites";
  } else if (mode === TeamPageTab.archived) {
    return "Archived";
  } else if (mode === TeamPageTab.search && searchTerm) {
    return "Search: " + searchTerm;
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
    } else if (props.mode === TeamPageTab.search) {
      return props.teamsToDisplay
      .map((team, index) => [team, index] as [Team, number])
      .filter(teamPair => {
        const team = teamPair[0];
        const search = props.searchTerm ? props.searchTerm.toLowerCase() : "";
        return props.searchTerm
          ? team.description.toLowerCase().includes(search) ||
              team.name.toLowerCase().includes(search) ||
              (team.createdAt && team.createdAt.toLowerCase().includes(search))
          : true;
      })
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
        width: '75%',
        marginLeft: '32px',
        marginRight: '16px'
      }}
    >
      <div style={{
          display: 'inline-block', 
          position: 'relative',
          width: '100%'
        }}
      >
        <Typography
          variant="h6"
          style={{
            float: 'left',
            paddingTop: '25px',
            paddingLeft: '25px',
            paddingBottom: '17px',
            fontFamily: defaultFont,
            fontSize: '18px',
            lineHeight: '22px'
          }}
        >
          <b>{getTitle(props.mode, props.searchTerm)}</b>
        </Typography>
        <Typography
          variant="h6"
          style={{
            float: 'right',
            paddingTop: '25px',
            paddingRight: '25px',
            paddingBottom: '17px',
            fontFamily: defaultFont,
            fontSize: '14px',
            lineHeight: '17px',
            color: '#7f7f7f'
          }}
        >
          Showing {teamCards.length} out of {props.numberOfTotalTeams} teams
        </Typography>
      </div>
      <Divider
        style={{
          border: '1px solid #efefef',
          height: '0px',
          marginBottom: '20px'
        }}
      />
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