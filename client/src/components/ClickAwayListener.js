import React, { useEffect } from 'react';

const ClickAwayListener = (props) => {
  useEffect(() => {
    window.addEventListener('click', handleClickAway, true);

    return () => {
      window.removeEventListener('click', handleClickAway, true);
    };
  }, []);

  const handleClickAway = (event) => {
    if (props.nodeRef && props.nodeRef.current.contains(event.target)) return;

    props.onClickAway();
  };

  return <div className={props.className}>{props.children}</div>;
};

export default ClickAwayListener;
