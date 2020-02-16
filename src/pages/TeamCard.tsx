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
      style={{ width: '230px' }}
      className={props.isArchived ? Classes.archivedTeam : Classes.normalTeam}
    >
      <Avatar
        alt={props.name}
        variant="rounded"
        src={props.iconSource}
        style={{ float: 'left' }}
      />
      <span>
        {props.name}
      </span>
      <br />
      <span>
        {'Created ' + props.date}
      </span>
      <div style={{ float:'right' }} onClick={props.handleFavourite}>
        {props.isFavourite
          ? <StarIcon />
          : <StarBorderIcon />
        }
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
