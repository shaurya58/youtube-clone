import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import ClickAwayListener from "../ClickAwayListener";
import TextInput from "../TextInput";

const useStyles = createUseStyles({
  root: {
    height: "40px",
    width: "100%",
    "&:focus": {
      outline: "none",
    },
    cursor: "pointer",
  },
  box: {
    width: "100%",
  },
  optionsOverlay: {
    width: ({ width }) => width,
    // width: "max-content",
    padding: "0.5rem 0 0.5rem 0",
    margin: "2px 0 0 0",
    listStyle: "none",
    textAlign: "left",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    visibility: ({ openDropdown }) => (openDropdown ? "visible" : "hidden"),
    "& li": {
      padding: "10px 0 10px 10px",
    },
    "& li:hover": {
      backgroundColor: "#f1f1f1",
    },

    position: "absolute",
    inset: ({ top, right, bottom, left }) =>
      `${top} ${right} ${bottom} ${left}`,
  },
});

const SelectInput = ({ label, options, className, handleChange }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState(options[0].value);
  const [top, setTop] = useState(0);
  const [right, setRight] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);

  const classes = useStyles({ openDropdown, top, right, bottom, left, width });

  const nodeRef = useRef();

  const onChange = (event, value) => {
    setValue(value);
    toggleDropdownState();
    handleChange(value);
  };

  const toggleDropdownState = () => {
    setOpenDropdown((prevState) => !prevState);
  };

  const handleClickAway = () => {
    setOpenDropdown(false);
  };

  useEffect(() => {
    if (openDropdown) {
      const selectInputRoot = document.getElementById("select-input");
      const { top, right, bottom, left, width } =
        selectInputRoot.getBoundingClientRect();
      console.log(selectInputRoot.getBoundingClientRect());
      setTop(top);
      setRight(right);
      setBottom(bottom);
      setLeft(left);
      setWidth(width);
    }
  }, [openDropdown]);

  console.log(top, right, bottom, left);

  return (
    <ClickAwayListener
      className={className}
      nodeRef={nodeRef}
      onClickAway={handleClickAway}
    >
      <div className={classes.root} ref={nodeRef} id="select-input">
        <TextInput
          className={classes.box}
          onClick={toggleDropdownState}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          readOnly
          helperText={label}
          inputProps={{
            style: {
              fontSize: "18px",
              cursor: "pointer",
            },
          }}
          endIcon={<KeyboardArrowDownIcon />}
        />
        <ul className={classes.optionsOverlay} onBlur={toggleDropdownState}>
          {options.map((option, idx) => (
            <li key={idx} onClick={(e) => onChange(e, option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </ClickAwayListener>
  );
};

SelectInput.propTypes = {
  options: PropTypes.array,
};

export default SelectInput;
