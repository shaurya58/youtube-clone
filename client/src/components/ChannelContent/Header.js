import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import VideoCallIcon from '@material-ui/icons/VideoCall';

import Avatar from '../Avatar';
import IconButton from '../IconButton';
import SearchBar from './SearchBar';

import youtubeStudio from '../../assets/youtube-studio.png';
import baahubali from '../../assets/baahubali-the-beginning.png';

import classes from './Header.module.css';

const Header = ({ onMenuBtnClick }) => {
  return (
    <header className={classes['primary-header']}>
      <div className={classes['primary-header__start']}>
        <MenuIcon onClick={onMenuBtnClick} />
        <img src={youtubeStudio} />
      </div>
      <SearchBar />
      <div className={classes['primary-header__end']}>
        <HelpOutlineIcon className={classes['primary-header__end__icon']} />
        <IconButton
          className={classes.button}
          startIcon={<VideoCallIcon style={{ color: 'red' }} />}
          label='Create'
        />
        <Avatar src={baahubali} size='32px' />
      </div>
    </header>
  );
};

export default Header;
