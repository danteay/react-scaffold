import React from 'react';

import './Notification.sass';

const Notification = props => {
  const handleClose = e => {
    props.close();
  };

  return (
    <div class="notification is-danger">
      <button onClick={handleClose} class="delete"></button>
      {props.msg}
    </div>
  );
};

export default Notification;
