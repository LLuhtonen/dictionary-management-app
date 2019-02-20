import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Index from './pages/index';
import Rules from './pages/rules';
import DictionaryListPage from './pages/dictionaryListPage';
import DictionaryPage from './pages/dictionaryPage';


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Header />
                <Route path="/" exact component={Index} />
                <Route path="/rules/" exact component={Rules} />
                <Route exact path="/dictionary/" component={DictionaryListPage} />
                <Route path="/dictionary/:id" component={DictionaryPage} />
            </div>
        </Router>
    );
  }
}

export default App;
