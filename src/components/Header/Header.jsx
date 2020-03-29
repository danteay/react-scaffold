/* eslint-disable no-undef */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserContext } from './../../context';
import config from './../../config';

import './Header.sass';

const Header = props => {
  const { user, setUser } = useContext(UserContext);

  const handleBurgerClick = e => {
    let target = document.querySelector('#nav-actions');
    target.classList.toggle('is-active');
  };

  const handleLogout = e => {
    localStorage.removeItem('user');
    setUser({ isLogin: false });

    if (props.history) {
      props.history.push('/login');
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          {config.siteTitle}
        </Link>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="nav-actions"
          onClick={handleBurgerClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="nav-actions" className="navbar-menu">
        <div className="navbar-start">
          {user.isLogin ? (
            <div className="navbar-item is-hoverable">
              <a className="navbar-link">Actions</a>
              <div class="navbar-dropdown">
                <Link className="navbar-item" to="/">
                  Test
                </Link>
              </div>
            </div>
          ) : null}
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {user.isLogin ? (
                <a onClick={handleLogout} className="button is-light">
                  Log-out
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
