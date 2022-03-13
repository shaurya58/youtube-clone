import React from 'react';

import PublishIcon from '@material-ui/icons/Publish';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import dashboardUpload from '../../../assets/dashboard-upload-icon.png';
import channelDashboard2FA from '../../../assets/channel-dashboard-2fa.png';

import classes from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div>
      <div className={classes.titleBar}>
        <span className={classes.title}>Channel dashboard</span>
        <div className={classes['titleBar__btnGroup']}>
          <PublishIcon />
          <SettingsInputAntennaIcon />
        </div>
      </div>
      <div className={classes['content-pane']}>
        <div className={classes.contentCard}>
          <img src={dashboardUpload} />
          <div>
            Want to see metrics on your recent video?
            <br />
            Upload and publish a video to get started.
          </div>
          <button>Upload Videos</button>
        </div>
        <div className={classes.contentCard}>
          <div className={classes['contentCard__title']}>Channel analytics</div>
          <section className={classes['contentCard__section']}>
            <span>Current subscribers</span>
            <div className={classes['contentCard__section__subscriber-count']}>
              0
            </div>
          </section>
          <section className={classes['contentCard__section']}>
            <div className={classes['contentCard__heading1']}>Summary</div>
            <div className={classes['contentCard__heading2']}>Last 28 days</div>
            <div className={classes['contentCard__section__stats']}>
              <span>Views</span>
              <span>0 -</span>
            </div>
            <div className={classes['contentCard__section__stats']}>
              <span>Watch time (hours)</span>
              <span>0.0 -</span>
            </div>
          </section>
          <section className={classes['contentCard__section']}>
            <div className={classes['contentCard__heading1']}>Top videos</div>
            <div className={classes['contentCard__heading2']}>
              Last 48 hours &middot; Views
            </div>
            <div className={classes['contentCard__link']}>
              <a>GO TO CHANNEL ANALYTICS</a>
            </div>
          </section>
        </div>
        <div className={classes.contentCard}>
          <div className={classes['contentCard__title']}>Ideas for you</div>
          <div>
            <b>Protect your channel</b>
          </div>
          <p>
            Your account is at greater risk of attack without 2-Step
            Verification. Turn it on for extra security
          </p>
          <img
            src={channelDashboard2FA}
            className={classes['contentCard__inline-img']}
          />
          <div className={classes['contentCard__link']}>
            {/* <span> */}
            <a>GET STARTED</a>
            <MoreVertIcon />
            {/* </span> */}
          </div>
        </div>
      </div>
      <footer className={classes.footer}>
        <span>Terms of use</span>
        <span>Privacy policy</span>
        <span>Policies and Safety</span>
      </footer>
    </div>
  );
};

export default Dashboard;
