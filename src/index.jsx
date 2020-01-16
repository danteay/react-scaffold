import { render } from 'preact';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Usage
const AppContainer = (
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
);

render(AppContainer, document.getElementById('app'));