import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px',
    border: '1px solid #d9d9dc',
    height: 'max-content',
    '&:hover': {
      border: '1px solid black',
    },
  },
  startIcon: {
    justifySelf: 'flex-start',
    width: '10%',
    textAlign: 'center',
    height: '100%',
    marginLeft: '5px',
    '& svg': {
      height: '100%',
    },
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
    width: '75%',
  },
  inputHelperText: {
    justifySelf: 'flex-start',
    fontSize: '10px',
    color: '#606060',
    padding: '0.5rem 0 0 0.5rem',
  },
  input: ({ helperText, inputProps }) => {
    return {
      border: 'none',
      height: '100%',
      marginTop: ({ helperText }) => helperText && '10px',
      padding: '0.5rem 0 0.5rem 0.5rem',
      '&:focus': {
        outline: 'none',
      },
      ...inputProps?.style,
    };
  },
  endIcon: {
    justifySelf: 'flex-end',
    height: '100%',
    width: '15%',
    textAlign: 'center',
    '& svg': {
      height: '100%',
    },
  },
});

const TextInput = ({
  className,
  value,
  onChange,
  onClick,
  startIcon,
  placeholder,
  helperText,
  endIcon,
  inputProps,
  iconProps,
  readOnly,
  multiline,
  rows,
}) => {
  const classes = useStyles({ helperText, inputProps });

  return (
    <div className={`${className} ${classes.root}`} onClick={onClick}>
      {startIcon && (
        <span className={`${iconProps?.className} ${classes.startIcon}`}>
          {startIcon}
        </span>
      )}
      <div className={classes.inputContainer}>
        {helperText && (
          <span className={classes.inputHelperText}>{helperText}</span>
        )}
        {multiline ? (
          <textarea
            className={classes.input}
            value={value}
            readOnly={readOnly}
            placeholder={placeholder}
            onChange={onChange}
            rows={rows}
          />
        ) : (
          <input
            className={classes.input}
            value={value}
            type='text'
            onChange={onChange}
            placeholder={placeholder}
            readOnly={readOnly}
          />
        )}
      </div>
      {endIcon && (
        <span className={`${iconProps?.className} ${classes.endIcon}`}>
          {endIcon}
        </span>
      )}
    </div>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  placeholder: PropTypes.string,
  inputProps: PropTypes.object,
  readOnly: PropTypes.bool,
};

export default TextInput;
