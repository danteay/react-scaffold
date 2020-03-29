/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';

import config from './../../config';
import Header from './../Header';

import './Layout.sass';

const Layout = props => {
  return (
    <>
      <Header title={config.siteTitle} />

      <div className="container">
        <main>{props.children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
