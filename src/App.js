import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Index from './pages/index';
import Rules from './pages/rules';
import Dictionary from './pages/dictionary';


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Header />
                <Route path="/" exact component={Index} />
                <Route path="/rules/" exact component={Rules} />
                <Route path="/dictionary/" component={Dictionary} />
            </div>
        </Router>
    );
  }
}

export default App;
