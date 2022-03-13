import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
// import Content from './Content';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Settings from './Settings';
import Content from './Content';
import Playlists from './Playlists';
import Analytics from './Analytics';
import Comments from './Comments';
import Subtitles from './Subtitles';
import Copyright from './Copyright';
import Monetisation from './Monetisation';
import Customisation from './Customisation';
import AudioLibrary from './AudioLibrary';

import classes from './ChannelContent.module.css';

const ChannelContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebarState = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <Header onMenuBtnClick={toggleSidebarState} />
      <Sidebar open={isSidebarOpen} />
      {/* <Settings /> */}
      <div
        className={`${classes.content} ${
          isSidebarOpen ? classes.contentShift : ''
        }`}
      >
        {/* <div className={`content${isSidebarOpen ? ' contentShift' : ''}`}> */}
        <Switch>
          <Route exact path='/channel/dashboard' component={Dashboard} />
          <Route exact path='/channel/content' component={Content} />
          <Route exact path='/channel/playlists' component={Playlists} />
          <Route exact path='/channel/analytics' component={Analytics} />
          <Route exact path='/channel/comments' component={Comments} />
          <Route exact path='/channel/subtitles' component={Subtitles} />
          <Route exact path='/channel/copyright' component={Copyright} />
          <Route exact path='/channel/monetisation' component={Monetisation} />
          <Route
            exact
            path='/channel/customisation'
            component={Customisation}
          />
          <Route exact path='/channel/audio-library' component={AudioLibrary} />
        </Switch>
      </div>
    </>
  );
};

export default ChannelContent;
