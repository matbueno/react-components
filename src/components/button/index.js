/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./styles.module.css";

const Button = ({
  type,
  htmlType,
  onClick,
  disabled,
  loading,
  isBlock,
  className,
  children
}) => (
  <button
    type={htmlType}
    onClick={onClick}
    className={classnames(styles.button, styles[type], {
      [styles.disabled]: disabled,
      [styles.loading]: loading,
      [styles.block]: isBlock
    })}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "link"]),
  htmlType: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isBlock: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

Button.defaultProps = {
  type: "primary",
  htmlType: "button",
  isBlock: false,
  onClick: () => {},
  disabled: false,
  loading: false,
  className: undefined,
  children: undefined
};

export default Button;
