import * as React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';

import Action from '../util/Action';
import Activity from '../util/Activity';
import defaultFont from '../util/Font';
import Person from '../util/Person';

export interface ActivityCardProps {
  displayedActivity: Activity,
  key: number
}

/**
 * Creates a span element containing an appropriate
 * message for the ActivityCard
 * 
 * @param user The user that performed the action
 * @param action The action that was performed
 * @param team The team that the action was performed on
 */
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
    <span
      style={{
        fontFamily: defaultFont,
        fontSize: '14px',
        lineHeight: '17px',
        color: '#444444'
      }}
    >
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
        marginBottom: '4px',
        marginLeft: '30px'
      }}
    >
      <table
        style={{
          width: '90%'
        }}
      >
        <tbody>
          <tr>
            <td>
              <span style={{ wordWrap: 'break-word' }}>
                <Avatar
                  src={activity.user.avatar}
                  style={{
                    float: 'left',
                    marginRight: '9px'
                  }}
                />
              </span>
            </td>
            <td
              style={{
                width: '80%'
              }}
            >
              <span>
                {createActivityMessage(activity.user, activity.action, activity.team)}                
              </span>
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <span
                style={{
                  display: 'block',
                  minWidth: '1px',
                  minHeight: '21.6667px',
                  color: '#565656',
                  mixBlendMode: 'normal',
                  opacity: 0.5,
                  fontFamily: defaultFont,
                  fontSize: '13px',
                  lineHeight: '16px'
                }}
              >
                {activity.createdAt || ""}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

export default ActivityCard;
