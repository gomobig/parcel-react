import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.less';


function Button(props) {
  const [text, setText] = useState(props.children);
  const { children, ...res } = props;
  useEffect(() => {
    if (typeof children === 'string' && children.length === 2) {
      setText(`${children[0]} ${children[1]}`);
    }
    setText(children);
  }, [children]);
  return (
    <button className={styles.modaBtn} {...res}>{text}</button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  disabled: false,
  onClick: null,
};
export default Button;