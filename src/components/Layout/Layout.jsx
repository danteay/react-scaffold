/* eslint-disable no-undef */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import config from './../../config'
import Header from './../Header'


import './Layout.sass'

class Layout extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Header title={config.siteTitle}/>

        <div className="container">
          <main>
            {this.props.children}
          </main>
        </div>
      </>
    )
  }
}

Layout.propTypes = {
  'children': PropTypes.node.isRequired
}

export default Layout