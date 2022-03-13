import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LiveTvIcon from '@material-ui/icons/LiveTv'; // for live
import MovieIcon from '@material-ui/icons/Movie';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ReceiptIcon from '@material-ui/icons/Receipt';
import StorefrontIcon from '@material-ui/icons/Storefront';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import SettingsIcon from '@material-ui/icons/Settings';
import ReportIcon from '@material-ui/icons/Report';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

import youtubeLogo from '../../assets/youtube-logo.png';
import classes from './Sidebar.module.css';

const Sidebar = ({ open, onMenuBtnClick }) => {
  return (
    <Fragment>
      {open ? (
        <Fragment>
          <header className={classes['sidebar__header']}>
            <MenuIcon
              className={classes['menu-icon']}
              onClick={onMenuBtnClick}
            />
            <img src={youtubeLogo} />
          </header>
          <aside className={classes.sidebar}>
            {/* <header className={classes['sidebar__header']}>
              <MenuIcon
                className={classes['menu-icon']}
                onClick={onMenuBtnClick}
              />
              <img src={youtubeLogo} />
            </header> */}
            <main className={classes['sidebar__main']}>
              <section className={classes['sidebar__section']}>
                <ul className={classes['sidebar__section__list']}>
                  <Link to='/'>
                    <li className={classes['sidebar__section__list-item']}>
                      <HomeIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Home
                      </div>
                    </li>
                  </Link>
                  <Link to='/explore'>
                    <li className={classes['sidebar__section__list-item']}>
                      <ExploreIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Explore
                      </div>
                    </li>
                  </Link>
                  <Link to='/subscriptions'>
                    <li className={classes['sidebar__section__list-item']}>
                      <SubscriptionsIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Subscriptions
                      </div>
                    </li>
                  </Link>
                </ul>
              </section>
              <section className={classes['sidebar__section']}>
                <ul className={classes['sidebar__section__list']}>
                  <Link to='/library'>
                    <li className={classes['sidebar__section__list-item']}>
                      <VideoLibraryIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Library
                      </div>
                    </li>
                  </Link>
                  <Link to='/history'>
                    <li className={classes['sidebar__section__list-item']}>
                      <HistoryIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        History
                      </div>
                    </li>
                  </Link>
                </ul>
              </section>
              <section className={classes['sidebar__signin-section']}>
                <div className={classes['sidebar-section__list-item__text']}>
                  Sign in to like videos, comment and subscribe.
                </div>
                <button className={classes['sidebar__signin-button']}>
                  <AccountCircleIcon />
                  SIGN IN
                </button>
              </section>
              <section className={classes['sidebar__section']}>
                <div className={classes['sidebar__section__title']}>
                  BEST OF YOUTUBE
                </div>
                <ul className={classes['sidebar__section__list']}>
                  <Link to='/music'>
                    <li className={classes['sidebar__section__list-item']}>
                      <PlayCircleOutlineIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Music
                      </div>
                    </li>
                  </Link>
                  <Link to='/sport'>
                    <li className={classes['sidebar__section__list-item']}>
                      <SportsCricketIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Sport
                      </div>
                    </li>
                  </Link>
                  <Link to='/gaming'>
                    <li className={classes['sidebar__section__list-item']}>
                      <SportsEsportsIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Gaming
                      </div>
                    </li>
                  </Link>
                  <Link to='/movies'>
                    <li className={classes['sidebar__section__list-item']}>
                      <MovieIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Films
                      </div>
                    </li>
                  </Link>
                  <Link to='/news'>
                    <li className={classes['sidebar__section__list-item']}>
                      <ReceiptIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        News
                      </div>
                    </li>
                  </Link>
                  <Link to='live'>
                    <li className={classes['sidebar__section__list-item']}>
                      <LiveTvIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Live
                      </div>
                    </li>
                  </Link>
                  <Link to='/fashion-and-beauty'>
                    <li className={classes['sidebar__section__list-item']}>
                      <StorefrontIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Fashion & beauty
                      </div>
                    </li>
                  </Link>
                  <Link to='/learning'>
                    <li className={classes['sidebar__section__list-item']}>
                      <LocalLibraryIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Learning
                      </div>
                    </li>
                  </Link>
                  <Link to='/spotlight'>
                    <li className={classes['sidebar__section__list-item']}>
                      <WbIncandescentIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Spotlight
                      </div>
                    </li>
                  </Link>
                  <Link to='/video'>
                    <li className={classes['sidebar__section__list-item']}>
                      <RotateRightIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        360&deg; Video
                      </div>
                    </li>
                  </Link>
                </ul>
              </section>
              <section className={classes['sidebar__section']}>
                <ul className={classes['sidebar__section__list']}>
                  <Link to='/browse-channels'>
                    <li className={classes['sidebar__section__list-item']}>
                      <div
                        className={classes['sidebar__section__list-item__icon']}
                      >
                        <AddCircleIcon />
                      </div>
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Browse channels
                      </div>
                    </li>
                  </Link>
                </ul>
              </section>
              <section className={classes['sidebar__section']}>
                <div className={classes['sidebar__section__title']}>
                  MORE FROM YOUTUBE
                </div>
                <ul className={classes['sidebar__section__list']}>
                  <Link to='youtube-premium'>
                    <li className={classes['sidebar__section__list-item']}>
                      <LoyaltyIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        YouTube Premium
                      </div>
                    </li>
                  </Link>
                  <Link to='/live'>
                    <li className={classes['sidebar__section__list-item']}>
                      <SettingsInputAntennaIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Live
                      </div>
                    </li>
                  </Link>
                </ul>
              </section>
              <section className={classes['sidebar__section']}>
                <ul className={classes['sidebar__section__list']}>
                  <Link to='/settings'>
                    <li className={classes['sidebar__section__list-item']}>
                      <SettingsIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Settings
                      </div>
                    </li>
                  </Link>
                  <Link to='/report-history'>
                    <li className={classes['sidebar__section__list-item']}>
                      <ReportIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Report history
                      </div>
                    </li>
                  </Link>
                  <Link to='/help'>
                    <li className={classes['sidebar__section__list-item']}>
                      <HelpIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Help
                      </div>
                    </li>
                  </Link>
                  <Link to='feedback'>
                    <li className={classes['sidebar__section__list-item']}>
                      <FeedbackIcon
                        className={classes['sidebar__section__list-item__icon']}
                      />
                      <div
                        className={classes['sidebar__section__list-item__text']}
                      >
                        Send feedback
                      </div>
                    </li>
                  </Link>
                </ul>
              </section>
              <footer className={classes['sidebar__footer']}>
                <div className={classes['sidebar__footer__primary-links']}>
                  <a>About</a>
                  <a>Press</a>
                  <a>Copyright</a>
                  <a>Contact us</a>
                  <a>Creator</a>
                  <a>Advertise</a>
                  <a>Developers</a>
                </div>
                <div className={classes['sidebar__footer__secondary-links']}>
                  <a>Terms</a>
                  <a>Privacy</a>
                  <a>Policy & Safety</a>
                  <a>How YouTube works</a>
                  <a>Test new features</a>
                </div>
                <div className={classes['sidebar__footer__copyright-text']}>
                  &copy; 2021 Google LLC
                </div>
              </footer>
            </main>
          </aside>
        </Fragment>
      ) : (
        <aside className={classes['sidebar-closed']}>
          <Link to='/'>
            <div className={classes['sidebar-closed__list-item']}>
              <HomeIcon />
              <span>Home</span>
            </div>
          </Link>
          <Link to='/explore'>
            <div className={classes['sidebar-closed__list-item']}>
              <ExploreIcon />
              Explore
            </div>
          </Link>
          <Link to='/subscriptions'>
            <div className={classes['sidebar-closed__list-item']}>
              <SubscriptionsIcon />
              Subscriptions
            </div>
          </Link>
          <Link to='/library'>
            <div className={classes['sidebar-closed__list-item']}>
              <VideoLibraryIcon />
              Library
            </div>
          </Link>
          <Link to='/history'>
            <div className={classes['sidebar-closed__list-item']}>
              <HistoryIcon />
              History
            </div>
          </Link>
        </aside>
      )}
    </Fragment>
  );
};

export default Sidebar;
