import * as React from 'react';

import Typography from '@material-ui/core/Typography';

import * as Classes from '../Classes';
import defaultFont from '../util/Font';

const ErrorScreen: React.FunctionComponent<{}> = () => {
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
        <p>
          Failed to load data :(
        </p>
      </header>
    </Typography>
  );
}

export default ErrorScreen;
