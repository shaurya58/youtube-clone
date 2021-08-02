import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import classes from '../styles/SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={classes['search-bar']}>
      <input
        className={classes['search-bar__input']}
        type="text"
        placeholder="Search"
      ></input>
      <button className={classes['search-bar__btn']}>
        <SearchIcon />
      </button>
      <MicIcon className={classes['search-bar__mic-icon']} />
    </div>
  );
};

export default SearchBar;
