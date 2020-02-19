import * as React from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import * as Classes from '../Classes';
import ActivityCard from './ActivityCard';
import ActivityItem from '../util/Activity';
import defaultFont from '../util/Font';

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
        width: '25%',
        marginLeft: '16px',
        marginRight: '32px'
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
          <b>Activity</b>
        </Typography>
      </div>
      <Divider
        style={{
          border: '1px solid #efefef',
          height: '0px',
          marginBottom: '20px'
        }}
      />
      <div>
        {activityCards}
      </div>
    </div>
  );
};

export default Activity;