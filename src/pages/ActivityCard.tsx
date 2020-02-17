import * as React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';

import Action from '../util/Action';
import Activity from '../util/Activity';
import Person from '../util/Person';
import * as Classes from '../Classes';


export interface ActivityCardProps {
  displayedActivity: Activity,
  key: number
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
  const activity = props.displayedActivity;
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
          src={activity.user.avatar}
          style={{
            float: 'left',
            margin: '3px',
            marginRight: '5px'
          }}
        />
        {createActivityMessage(activity.user, activity.action, activity.team)}
        <br />
        {activity.createdAt}
      </span>
    </Card>
  );
};

export default ActivityCard;
