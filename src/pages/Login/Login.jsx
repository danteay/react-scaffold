/* eslint-disable no-undef */
import React, { useState, useContext, useEffect } from 'react';
import Layout from './../../components/Layout';
import Notification from './../../components/Notification';
import { UserContext } from './../../context';
import api from './../../services/api';

import './Login.sass';

const Login = props => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState({ msg: '', active: false });
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user.isLogin) {
      props.history.push('/');
    }

    let prevUser = localStorage.getItem('user');

    if (prevUser != null) {
      setUser(prevUser);
      props.history.push('/');
    }
  }, [user]);

  const handleLogin = async () => {
    let res = await api.login(email, pass);

    if (res.error != null) {
      setError({ msg: res.error, active: true });
      return;
    }

    res.user.isLogin = true;
    setUser(res.user);

    localStorage.setItem('user', JSON.stringify(res.user));
    props.history.push('/');
  };

  const handleFieldChange = (e, setValue) => {
    setValue(e.target.value);
  };

  return (
    <Layout>
      {error.active ? (
        <Notification
          msg={error.msg}
          close={() => {
            setError({ active: false });
          }}
        />
      ) : null}

      <div className="columns">
        <div className="column login-icon">
          <div>
            <h3 className="title is-3">Login</h3>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-8 login-form is-offset-2">
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                onChange={e => {
                  handleFieldChange(e, setEmail);
                }}
                className="input"
                type="email"
                placeholder="email"
                value={email}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                onChange={e => {
                  handleFieldChange(e, setPass);
                }}
                className="input"
                type="password"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button onClick={handleLogin} className="button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
