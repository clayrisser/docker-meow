import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from '../../core/Link';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import Layout from '../../components/Layout';
import os from 'os';
import _ from 'lodash';
import murmur from 'murmurhash';

class Home extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  state = {};

  render() {
    let ip = '';
    _.each(os.networkInterfaces(), (networkInterface, key) => {
      _.each(networkInterface, (network) => {
        if (ip.length <= 0 && !network.internal && network.family === 'IPv4') ip = network.address;
      });
    });
    return (<div className={s.root}>
      <Layout>
        <div className={s.content}>
          <img src={this.getCatFromIp(ip)} />
        </div>
      </Layout>
    </div>);
  }

  getCatFromIp(ip) {
    return `${murmur.v3(ip) % 7}.gif`;
  }
}

export default withStyles(s)(Home);
