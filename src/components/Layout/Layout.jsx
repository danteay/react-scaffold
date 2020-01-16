/* eslint-disable no-undef */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import configs from './../../configs'
import Header from './../Header'


import './Layout.sass'

class Layout extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Header title={configs.siteTitle}/>

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