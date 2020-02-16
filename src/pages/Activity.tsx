import * as React from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import * as Classes from '../Classes';
import ActivityCard from './ActivityCard';
import Action from '../util/Action';

const Activity: React.FunctionComponent<{}> = () => {
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
        <ActivityCard
          user={{
            id: 1,
            name: "Julie",
            avatar: "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139"
          }}
          action={'increased_quota' as Action}
          team='Indeed - US'
          time='2 hours ago'
        />
      </div>
    </div>
  );
};

export default Activity;