import * as React from 'react';
import TabPanelProps from './TabPanel';
import * as Classes from '../Classes';

import { Typography } from '@material-ui/core';

const PeoplePanel: React.FunctionComponent<TabPanelProps> = (props: TabPanelProps) => {
  const logo = require('../logo.svg');
  const isShown = props.tabValue === props.selectedTab;
  
  return (
    <Typography
      component="div"
      role="tabpanel"
      className={Classes.tabPanel}
      hidden={!isShown}
    >
      {isShown && 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            People
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      }
    </Typography>
  );
}

export default PeoplePanel;
