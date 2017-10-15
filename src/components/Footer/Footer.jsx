import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div className={s.root}>
      2017 &copy; <a href="https://jamrizzi.com" target="_blank">jamrizzi</a>
    </div>);
  }
}

export default withStyles(s)(Footer);
