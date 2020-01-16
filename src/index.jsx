/* eslint-disable no-undef */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// class Root extends Component {
//   render() {
//     return (
//       <BrowserRouter basename="/">
//         <App />
//       </BrowserRouter>
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById('app'))

// // eslint-disable-next-line no-undef
// render(AppContainer, document.getElementById('app'));