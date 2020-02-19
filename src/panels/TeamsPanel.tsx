import * as React from 'react';

import Typography from '@material-ui/core/Typography';

import TabPanelProps from './TabPanel';
import * as Classes from '../Classes';
import TeamsPage, { TeamPageTab } from '../pages/TeamsPage';
import defaultFont from '../util/Font';

const TeamsPanel: React.FunctionComponent<TabPanelProps> = (props: TabPanelProps) => {
  const isShown = props.tabValue === props.selectedTab;
  
  return (
    <Typography
      component="div"
      role="tabpanel"
      className={Classes.tabPanel}
      hidden={!isShown}
      style={{
        fontFamily: defaultFont
      }}
    >
      {isShown
        ? <TeamsPage defaultTab={TeamPageTab.all} />
        : undefined
      }
    </Typography>
  );
}

export default TeamsPanel;
