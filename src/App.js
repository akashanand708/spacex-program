import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Programs from './screens/Programs/Programs';
import Toast from './component/Toast/Toast';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Toast/>
          <Switch>
          <Route exact path="/" component={Programs} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
