import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from '../../Backdrop';

import classes from './Settings.module.css';

const SettingsModal = () => {
  return (
    <div className={classes.settingsModal}>
      <div className={classes.title}>Settings</div>
      <div className={classes.sidebar}>
        <ul className={classes['sidebar__list']}>
          <li className={classes.selected}>General</li>
          <li>Channel</li>
          <li>Upload defaults</li>
          <li>Permissions</li>
          <li>Community</li>
          <li>Agreements</li>
        </ul>
      </div>
      <div className={classes.main}></div>
      <div className={classes.footer}>
        <div className={classes['footer__btnGroup']}>
          <button>CLOSE</button>
          <button disabled={true}>SAVE</button>
        </div>
      </div>
    </div>
  );
};

const Settings = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop'))}
      {ReactDOM.createPortal(
        <SettingsModal />,
        document.getElementById('overlay')
      )}
    </Fragment>
  );
};

export default Settings;
