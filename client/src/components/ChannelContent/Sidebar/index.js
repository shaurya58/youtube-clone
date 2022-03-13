import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

import DashboardIcon from '@material-ui/icons/Dashboard';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import AssessmentIcon from '@material-ui/icons/Assessment';
import CommentIcon from '@material-ui/icons/Comment';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import CopyrightIcon from '@material-ui/icons/Copyright';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import FeedbackIcon from '@material-ui/icons/Feedback';
import EditIcon from '@material-ui/icons/Edit';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import Avatar from '../../Avatar';

import baahubali from '../../../assets/baahubali-the-beginning.png';

import classes from './Sidebar.module.css';

const sidebarItems = [
  {
    url: '/channel/dashboard',
    icon: <DashboardIcon />,
    label: 'Dashboard',
  },
  {
    url: '/channel/content',
    icon: <VideoLibraryIcon />,
    label: 'Content',
  },
  {
    url: '/channel/playlists',
    icon: <PlaylistPlayIcon />,
    label: 'Playlists',
  },
  {
    url: '/channel/analytics',
    icon: <AssessmentIcon />,
    label: 'Analytics',
  },
  {
    url: '/channel/comments',
    icon: <CommentIcon />,
    label: 'Comments',
  },
  {
    url: '/channel/subtitles',
    icon: <SubtitlesIcon />,
    label: 'Subtitles',
  },
  {
    url: '/channel/copyright',
    icon: <CopyrightIcon />,
    label: 'Copyright',
  },
  {
    url: '/channel/monetisation',
    icon: <MonetizationOnOutlinedIcon />,
    label: 'Monetisation',
  },
  {
    url: '/channel/customisation',
    icon: <EditIcon />,
    label: 'Customisation',
  },
  {
    url: '/channel/audio-library',
    icon: <LibraryMusicIcon />,
    label: 'Audio Library',
  },
];

const Sidebar = ({ open = true, ...props }) => {
  const [userImgUrl, setUserImgUrl] = useState(null);

  useEffect(() => {
    // fetch userImgUrl through an API request
    // and set it in state
  }, []);

  return (
    <Fragment>
      {open ? (
        <Fragment>
          <aside className={classes.sidebar}>
            <a>
              <Avatar src={baahubali} className={classes.avatar} size='112px' />
            </a>
            <div className={classes['user-label']}>
              <span>Your channel</span>
              <span className={classes['user-label__username']}>
                Shaurya Sisodia
              </span>
            </div>
            <main className={classes['sidebar__main']}>
              <ul className={classes['sidebar__list']}>
                {sidebarItems.map(({ url, icon, label }, index) => (
                  <Link to={url} key={index}>
                    <li
                      className={`${classes['sidebar__list-item']} ${
                        url === props.location.pathname ? classes.selected : ''
                      }`}
                    >
                      <span className={classes['sidebar__list-item__icon']}>
                        {icon}
                      </span>
                      <span className={classes['sidebar__list-item__text']}>
                        {label}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </main>
            <footer className={classes['sidebar__footer']}>
              <ul className={classes['sidebar__list']}>
                <li className={classes['sidebar__list-item']}>
                  <span className={classes['sidebar__list-item__icon']}>
                    <SettingsIcon />
                  </span>
                  <span className={classes['sidebar__list-item__text']}>
                    Settings
                  </span>
                </li>
                <li className={classes['sidebar__list-item']}>
                  <span className={classes['sidebar__list-item__icon']}>
                    <FeedbackIcon />
                  </span>
                  <span className={classes['sidebar__list-item__text']}>
                    Send feedback
                  </span>
                </li>
              </ul>
            </footer>
          </aside>
        </Fragment>
      ) : (
        <aside className={classes['sidebar-closed']}>
          <a>
            <Avatar src={baahubali} className={classes.avatar} size='35px' />
          </a>
          {sidebarItems.map(({ url, label, icon }, index) => (
            <Link to={url} key={index}>
              <div
                className={`${classes['sidebar-closed__list-item']} ${
                  url === props.location.pathname ? classes.selected : ''
                }`}
              >
                {icon}
              </div>
            </Link>
          ))}
          <footer className={classes['sidebar__footer']}>
            <li className={classes['sidebar-closed__list-item']}>
              <SettingsIcon />
            </li>
            <li className={classes['sidebar-closed__list-item']}>
              <FeedbackIcon />
            </li>
          </footer>
        </aside>
      )}
    </Fragment>
  );
};

export default withRouter(Sidebar);
