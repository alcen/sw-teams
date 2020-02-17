import * as React from 'react';
import * as Classes from '../Classes';

import Typography from '@material-ui/core/Typography';

const ErrorScreen: React.FunctionComponent<{}> = () => {
  return (
    <Typography
      component="div"
      role="tabpanel"
      className={Classes.tabPanel}
    >
      <header className={Classes.loadingScreen}>
        <p>
          Failed to load data :(
        </p>
      </header>
    </Typography>
  );
}

export default ErrorScreen;
