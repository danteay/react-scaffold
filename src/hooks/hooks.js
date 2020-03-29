/* eslint-disable no-undef */
import React, { useContext, useEffect } from 'react';
import { UserContext } from './../context';

export const useSession = (history) => {
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    if (user.isLogin){
      return;
    }

    let prevUser = localStorage.getItem('user');

    if (prevUser != null) {
      prevUser = JSON.parse(prevUser);
      setUser(prevUser);
      return;
    }

    history.push('/login');
  }, [user])
};