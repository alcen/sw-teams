import * as React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';

import Action from '../util/Action';
import Person from '../util/Person';
import * as Classes from '../Classes';

export interface ActivityCardProps {
  action: Action
  time?: string,
  team: string
  user: Person
}

function createActivityMessage(user: Person, action: Action, team: String): JSX.Element {
  let description: string = '';
  let end: string = '';
  if (action === Action.addedLeads) {
    description = ' added new leads to ';
    end = '.';
  } else if (action === Action.archivedTeam) {
    description = ' archived the team ';
    end = '.';
  } else if (action === Action.increasedQuota) {
    description = ' increased ';
    end = '\'s quota.';
  } else {
    console.error('Unknown action in ActivityCard.tsx');
  }
  return (
    <span>
      <b>{user.name}</b>
      {description}
      <b>{team}</b>
      {end}
    </span>
  );
}

const ActivityCard: React.FunctionComponent<ActivityCardProps> = (props: ActivityCardProps) => {
  return (
    <Card style={{
        borderRadius: 'unset',
        boxShadow: 'unset',
        marginTop: '4px',
        marginBottom: '4px'
      }}
    >
      <span style={{ wordWrap: 'break-word' }}>
        <Avatar
          src={props.user.avatar}
          style={{
            float: 'left',
            margin: '3px',
            marginRight: '5px'
          }}
        />
        {createActivityMessage(props.user, props.action, props.team)}
        <br />
        {props.time}
      </span>
    </Card>
  );
};

export default ActivityCard;
