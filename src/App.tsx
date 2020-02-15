import * as React from 'react';
import './App.css';

import { Tab, Tabs } from '@material-ui/core';
import * as Classes from './Classes';
import { TabType } from './TabType';
import NarwhalPanel from './panels/NarwhalPanel';
import ChatPanel from './panels/ChatPanel';
import TeamsPanel from './panels/TeamsPanel';
import PeoplePanel from './panels/PeoplePanel';
import StatisticsPanel from './panels/StatisticsPanel';

interface AppState {
  selectedTab: TabType
}

class App extends React.Component<{}, AppState> {
  constructor() {
    super({});
    this.state = {
      selectedTab: TabType.teams
    }
  }

  private handleChange = (event: React.ChangeEvent<{}>, newValue: TabType) => {
    this.setState(
      { selectedTab: newValue }
    )
  };

  public render() {
    return (
      <div className={Classes.app}>
        <Tabs
          orientation="vertical"
          value={false}
          onChange={this.handleChange}
        >
          <Tab value={TabType.narwhal} label="narwhal" />
          <Tab value={TabType.chat} label="chat" />
          <Tab value={TabType.teams} label="teams" />
          <Tab value={TabType.people} label="people" />
          <Tab value={TabType.statistics} label="statistics" />
        </Tabs>
        <NarwhalPanel tabValue={TabType.narwhal} selectedTab={this.state.selectedTab} />
        <ChatPanel tabValue={TabType.chat} selectedTab={this.state.selectedTab} />
        <TeamsPanel tabValue={TabType.teams} selectedTab={this.state.selectedTab} />
        <PeoplePanel tabValue={TabType.people} selectedTab={this.state.selectedTab} />
        <StatisticsPanel tabValue={TabType.statistics} selectedTab={this.state.selectedTab} />
      </div>
    );
  }
}

export default App;
