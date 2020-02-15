import * as React from 'react';
import './App.css';

import Backdrop from '@material-ui/core/Backdrop';
import IconButton from '@material-ui/core/IconButton';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import HelpIcon from '@material-ui/icons/Help';

import * as Classes from './Classes';
import { TabType } from './TabType';
import NarwhalPanel from './panels/NarwhalPanel';
import ChatPanel from './panels/ChatPanel';
import TeamsPanel from './panels/TeamsPanel';
import PeoplePanel from './panels/PeoplePanel';
import StatisticsPanel from './panels/StatisticsPanel';

interface AppState {
  selectedTab: TabType
  isBackdropOpen: boolean
}

class App extends React.Component<{}, AppState> {
  constructor() {
    super({});
    this.state = {
      selectedTab: TabType.teams,
      isBackdropOpen: false
    }
  }

  private handleTabChange = (event: React.ChangeEvent<{}>, newValue: TabType) => {
    this.setState({ ...this.state,  selectedTab: newValue });
  };

  private handleHelpButtonClick = () => {
    this.setState({ ...this.state,  isBackdropOpen: true });
  };

  private handleOverlayClose = () => {
    this.setState({ ...this.state,  isBackdropOpen: false });
  };

  public render() {
    return (
      <div>
        <div className={Classes.app}>
          <Tabs
            orientation="vertical"
            value={this.state.selectedTab}
            onChange={this.handleTabChange}
          >
            <Tab value={TabType.narwhal} label="narwhal" />
            <Tab value={TabType.chat} label="chat" />
            <Tab value={TabType.teams} label="teams" />
            <Tab value={TabType.people} label="people" />
            <Tab value={TabType.statistics} label="statistics" />

            <IconButton
              id={Classes.helpIcon}
              onClick={this.handleHelpButtonClick}
            >
              <HelpIcon />
            </IconButton>
          </Tabs>

          <NarwhalPanel tabValue={TabType.narwhal} selectedTab={this.state.selectedTab} />
          <ChatPanel tabValue={TabType.chat} selectedTab={this.state.selectedTab} />
          <TeamsPanel tabValue={TabType.teams} selectedTab={this.state.selectedTab} />
          <PeoplePanel tabValue={TabType.people} selectedTab={this.state.selectedTab} />
          <StatisticsPanel tabValue={TabType.statistics} selectedTab={this.state.selectedTab} />
        </div>

        <Backdrop
          id={Classes.backdrop}
          open={this.state.isBackdropOpen}
          onClick={this.handleOverlayClose}
        >
          HELLO
        </Backdrop>
      </div>
    );
  }
}

export default App;
