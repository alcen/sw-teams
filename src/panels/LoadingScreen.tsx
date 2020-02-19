import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import * as Classes from '../Classes';
import defaultFont from '../util/Font';

export interface LoadingScreenProps {
  progress: number
}

const LoadingScreen: React.FunctionComponent<LoadingScreenProps> = (props: LoadingScreenProps) => {
  return (
    <Typography
      component="div"
      role="tabpanel"
      className={Classes.tabPanel}
      style={{
        fontFamily: defaultFont
      }}
    >
      <header className={Classes.loadingScreen}>
        <CircularProgress
          color='inherit'
          variant="determinate"
          value={props.progress}
          size='20%'
          thickness={5.0}
        />
        <p>
          Loading...
        </p>
      </header>
    </Typography>
  );
}

export default LoadingScreen;
