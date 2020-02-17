import * as React from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import * as Classes from '../Classes';
import ActivityCard from './ActivityCard';
import ActivityItem from '../util/Activity';

interface ActivityProps {
  activitiesToDisplay: ActivityItem[]
}

const Activity: React.FunctionComponent<ActivityProps> = (props: ActivityProps) => {
  const activityCardConstructor = (activity: ActivityItem, index: number) => {
    return <ActivityCard
      key={index}
      displayedActivity={activity}
    />
  };
  const activityCards = props.activitiesToDisplay.map(activityCardConstructor);

  return (
    <div
      className={Classes.allTeams}
      style={{
        width: '30%'
      }}
    >
      <Typography variant="h6">
        Activity
      </Typography>
      <Divider />
      <div>
        {activityCards}
      </div>
    </div>
  );
};

export default Activity;