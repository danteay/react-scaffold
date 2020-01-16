import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './Header.sass'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {title} = this.props

    return (
      <header>
        <div className="header-title">
          <h1>
            <Link to="/">{title}</Link>
          </h1>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  'title': PropTypes.string
}

export default Header