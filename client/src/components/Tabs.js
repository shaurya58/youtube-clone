import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  tabs: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  tab: {
    textAlign: 'center',
    cursor: 'pointer',
  },
  indicator: {
    transform: (indicatorIndex) => `translateX(calc(${indicatorIndex} * 100%))`,
    transition:
      'transform 0.15s cubic-bezier(0.4, 0, 1, 1), left 0.15s cubic-bezier(0.4, 0, 1, 1)',
  },
});

const Tabs = ({ className, options, selectedTab, onTabClick, styleProps }) => {
  const [indicatorIndex, setIndicatorIndex] = useState(0);

  const classes = useStyles(indicatorIndex);

  const handleChange = (event, value) => {
    const updatedIndex = options.findIndex((option) => option.value === value);
    setIndicatorIndex(updatedIndex);
    onTabClick(event, value);
  };

  console.log(selectedTab);

  return (
    <>
      <div className={`${classes.tabs} ${className}`}>
        {options.map(({ value, label }) => (
          <span
            className={`${classes.tab} ${
              selectedTab === value && styleProps.activeTabClassName
            } ${styleProps?.tabClassName}`}
            key={value}
            onClick={(e) => handleChange(e, value)}
          >
            {label}
          </span>
        ))}
      </div>
      <div
        className={`${classes.indicator} ${styleProps?.indicatorClassName}`}
      />
    </>
  );
};

Tabs.propTypes = {
  options: PropTypes.array,
  selectedTab: PropTypes.string,
};

export default Tabs;
