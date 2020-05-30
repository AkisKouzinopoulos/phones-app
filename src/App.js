import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import Shop from './containers/Shop/Shop';
import DeviceDetails from './components/DeviceDetails/DeviceDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <header className="container text-white">
          <h4 className="py-2">
            <Link to="/">
              Shop
            </Link>
          </h4>
        </header>
        <div className="App">
        <Switch>
          <Route exact path="/" component={Shop} />
          <Route path="/device/:id" component={DeviceDetails} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
