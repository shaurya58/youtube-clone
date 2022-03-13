import SearchIcon from '@material-ui/icons/Search';

import TextInput from '../TextInput';

import classes from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <TextInput
      className={classes['search-bar']}
      placeholder='Search across your channel'
      startIcon={<SearchIcon />}
      inputProps={{
        className: classes['search-bar__input'],
      }}
    />
  );
};

export default SearchBar;
