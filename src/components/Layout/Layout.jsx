import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.scss';
import Header from '../Header';
import Footer from '../Footer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div className={s.root}>
      <Header />
      <div className={s.content}>
        {this.props.children}
      </div>
      <Footer />
    </div>);
  }
}

export default withStyles(s)(Layout);
