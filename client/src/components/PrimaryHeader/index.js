import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import IconButton from "../IconButton";
import SearchBar from "./SearchBar";

import youtubeLogo from "../../assets/youtube-logo.png";

import classes from "./PrimaryHeader.module.css";

const PrimaryHeader = ({ onMenuBtnClick }) => {
  console.log("inside primary header");

  return (
    <header className={classes["primary-header"]}>
      <div className={classes["primary-header__start"]}>
        <MenuIcon onClick={onMenuBtnClick} />
        <img src={youtubeLogo} />
      </div>
      <SearchBar />
      <div className={classes["primary-header__end"]}>
        <AppsIcon className={classes["primary-header__end__icon"]} />
        <MoreVertIcon className={classes["primary-header__end__icon"]} />
        {/* <button className={classes['signin-button']}>
          <AccountCircleIcon />
          SIGN IN
        </button> */}
        <IconButton
          className={classes["signin-button"]}
          startIcon={<AccountCircleIcon />}
          label="SIGN IN"
        />
      </div>
    </header>
  );
};

export default PrimaryHeader;
