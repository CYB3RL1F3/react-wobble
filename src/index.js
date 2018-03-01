// components exported here will be available in your libary bundle
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './style.css';

class Wobble extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    hover: PropTypes.bool,
    style: PropTypes.shape(),
    duration: PropTypes.number,
    delay: PropTypes.number,
    max: PropTypes.number,
    letterStyle: PropTypes.shape(),
    className: PropTypes.string,
    letterClassName: PropTypes.string,
  }

  static defaultProps = {
    style: {},
    duration: 0.05,
    hover: true,
    delay: 0.15,
    className: '',
    letterStyle: {},
    max: 0,
    letterClassName: '',
  }

  getClasses = (letter) => {
    const { letterClassName } = this.props;
    const o = {};
    if (letterClassName.length) {
      letterClassName.split(' ').map(
        (className) => {
          o[className] = true;
          return true;
        });
    }
    o[styles.letter] = true;
    o[styles.sl] = true;
    if (letter === ' ') {
      o[styles.space] = true;
    }
    return classnames(o);
  }

  getStyles = (index) => {
    const { max, duration, delay, letterStyle } = this.props;
    const styleSheet = Object.assign({}, letterStyle);
    const d = index > max && max > 0
      ? delay + (duration * max)
      : delay + (duration * index);
    styleSheet['animationDelay'] = `${d}s`; // eslint-disable-line
    return styleSheet;
  }

  getKey = (letter, index) => {
    let str = '';
    for (let i = 0; i < index; i++) { // eslint-disable-line
      str = `${letter}${str}`;
    }
    return str;
  }

  render() {
    const { text, className, style, hover } = this.props;
    const cl = `${hover ? styles.clhover : styles.cl} ${className}`;
    text.split('').map((letter) => { // eslint-disable-line
      return true;
    });
    return (
      <span className={cl} style={style}>
        {
          text.split('').map((letter, index) => (
            <span
              key={this.getKey(letter, index)}
              className={this.getClasses(letter)}
              style={this.getStyles(index)}
            >
              {letter}
            </span>
          ))
        }
      </span>
    );
  }
}

export default Wobble;
