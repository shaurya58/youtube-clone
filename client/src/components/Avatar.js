import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  avatar: {
    borderRadius: "50%",
    textAlign: "center",
    objectFit: "cover",
    color: "transparent",
  },
});

const Avatar = ({ src, className, size, alt }) => {
  const classes = useStyles();

  return (
    <img
      className={`${classes.avatar} ${className}`}
      alt={alt}
      src={src}
      style={{ height: size, width: size }}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
};

export default Avatar;
