import { Component } from 'preact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import './App.sass'

export default class App extends Component {

  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route path="" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }

}