import * as React from 'react';
import './App.css';

import Backdrop from '@material-ui/core/Backdrop';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import HelpIcon from '@material-ui/icons/Help';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PeopleIcon from '@material-ui/icons/People';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';

import * as Classes from './Classes';
import { TabType } from './TabType';
import NarwhalPanel from './panels/NarwhalPanel';
import ChatPanel from './panels/ChatPanel';
import TeamsPanel from './panels/TeamsPanel';
import PeoplePanel from './panels/PeoplePanel';
import StatisticsPanel from './panels/StatisticsPanel';

import whaleLogo from './sw-logo-white.svg';

interface AppState {
  selectedTab: TabType
  isBackdropOpen: boolean
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
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
      <div className={Classes.app}>
        <div className={Classes.tabs}>
          <Tabs
            orientation="vertical"
            value={this.state.selectedTab}
            onChange={this.handleTabChange}
            // hide default tab indicator line
            TabIndicatorProps={{ style: { display: 'none' } }}
          >
            <Tab
              value={TabType.narwhal}
              icon={
                <Icon
                  style={{
                    display: 'flex'
                  }}
                >
                  <img
                    src={whaleLogo}
                    alt='whale'
                    style={{
                      width: '24px'
                    }}
                  />
                </Icon>
              } aria-label='narwhal'
            />
            <Tab value={TabType.chat} icon={<QuestionAnswerIcon />} aria-label='chat' />
            <Tab value={TabType.teams} icon={<LocationCityIcon />} aria-label='teams' />
            <Tab value={TabType.people} icon={<PeopleIcon />} aria-label='people' />
            <Tab value={TabType.statistics} icon={<TrendingUpRoundedIcon />} aria-label='statistics' />

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
