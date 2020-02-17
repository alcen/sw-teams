import * as React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import PeopleIcon from '@material-ui/icons/People';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import * as Classes from '../Classes';
import Team from '../util/Team';

export interface TeamCardProps {
  displayedTeam: Team,
  handleFavourite: () => void,
  key: number,
}

const TeamCard: React.FunctionComponent<TeamCardProps> = (props: TeamCardProps) => {
  const team: Team = props.displayedTeam;
  return (
    <Card
      style={{
        margin: '5px',
        width: '250px'
      }}
      className={
        team.isArchived
          ? Classes.archivedTeam
          : Classes.normalTeam
      }
    >
      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '100%'
        }}
      >
        <div
          style={{
            float: 'left',
            width: '75%'
          }}
        >
          <Avatar
            alt={props.displayedTeam.name}
            variant="rounded"
            src={props.displayedTeam.iconSource}
            style={{
              float: 'left',
              margin: '3px'
            }}
          />
          <span>
            {team.name}
          </span>
          <br />
          <span style={{ fontSize: 11 }}>
            {team.createdAt ? 'Created ' + team.createdAt : undefined}
          </span>
        </div>
        <div style={{ float:'right', margin: '5px' }} onClick={props.handleFavourite}>
          {team.isArchived
            ? undefined
            : (team.isFavourite
              ? <StarIcon style={{ color:'yellow' }} />
              : <StarBorderIcon style={{ color:'grey' }} />)
          }
        </div>
      </div>
      <br />
      <span style={{ wordWrap: 'break-word' }}>
        {team.description}
      </span>
      <Divider />
      <span>
        <QuestionAnswerIcon />
        {team.numberOfCampaigns}
        {' Campaigns'}
      </span>
      <span>
        <PeopleIcon />
        {team.numberOfLeads}
        {' Leads'}
      </span>
    </Card>
  );
};

export default TeamCard;
