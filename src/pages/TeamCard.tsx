import * as React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import PeopleIcon from '@material-ui/icons/People';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import * as Classes from '../Classes';


export interface TeamCardProps {
  date: string,
  description: string,
  handleFavourite: () => void,
  iconSource: string,
  isFavourite: boolean,
  isArchived: boolean,
  name: string,
  numberOfCampaigns: number,
  numberOfLeads: number
}

const TeamCard: React.FunctionComponent<TeamCardProps> = (props: TeamCardProps) => {
  return (
    <Card
      style={{
        margin: '5px',
        width: '250px'
      }}
      className={props.isArchived ? Classes.archivedTeam : Classes.normalTeam}
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
            alt={props.name}
            variant="rounded"
            src={props.iconSource}
            style={{
              float: 'left',
              margin: '3px'
            }}
          />
          <span>
            {props.name}
          </span>
          <br />
          <span style={{ fontSize: 11 }}>
            {'Created ' + props.date}
          </span>
        </div>
        <div style={{ float:'right', margin: '5px' }} onClick={props.handleFavourite}>
          {props.isFavourite
            ? <StarIcon style={{ color:'yellow' }} />
            : <StarBorderIcon style={{ color:'grey' }} />
          }
        </div>
      </div>
      <br />
      <span style={{ wordWrap: 'break-word' }}>
        {props.description}
      </span>
      <Divider />
      <span>
        <QuestionAnswerIcon />
        {props.numberOfCampaigns}
        {' Campaigns'}
      </span>
      <span>
        <PeopleIcon />
        {props.numberOfLeads}
        {' Leads'}
      </span>
    </Card>
  );
};

export default TeamCard;
