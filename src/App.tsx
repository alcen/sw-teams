import * as React from 'react';
import './App.css';

import { Tab, Tabs } from '@material-ui/core';
import { TabType } from './TabType';

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
      {
        selectedTab: newValue
      }
    )
  };

  public render() {
    return (
      <div className="App">
        <Tabs
          orientation="vertical"
          value={false}
          onChange={this.handleChange}
        >
          <Tab value={TabType.narwhal} label="narwhal"/>
          <Tab value={TabType.chat} label="chat"/>
          <Tab value={TabType.teams} label="teams"/>
          <Tab value={TabType.people} label="people"/>
          <Tab value={TabType.statistics} label="statistics"/>
        </Tabs>
      </div>
    );
  }
}

/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.tsx</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */
export default App;
