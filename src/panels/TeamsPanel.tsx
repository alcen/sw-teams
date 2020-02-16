import * as React from 'react';

import TabPanelProps from './TabPanel';
import * as Classes from '../Classes';
import TeamsPage, { TeamPageTab } from '../pages/TeamsPage';

import Typography from '@material-ui/core/Typography';

const TeamsPanel: React.FunctionComponent<TabPanelProps> = (props: TabPanelProps) => {
  const isShown = props.tabValue === props.selectedTab;
  
  return (
    <Typography
      component="div"
      role="tabpanel"
      className={Classes.tabPanel}
      hidden={!isShown}
    >
      {isShown
        ? <TeamsPage defaultTab={TeamPageTab.all} />
        : undefined
      }
    </Typography>
  );
}

export default TeamsPanel;
