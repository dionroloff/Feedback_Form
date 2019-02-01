//App.js
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

//Components
import Comments from './../Comments/Comments.js';
import Feeling from './../Feeling/Feeling.js';
import Supported from './../Supported/Supported.js';
import Understanding from './../Understanding/Understanding.js';
import ThankYou from './../ThankYou/ThankYou.js';
import Review from './../Review/Review.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>

        {/* Hashrouter */}
        <Router>
          <div>

            {/* Routes */}
            <Route exact path={'/'} component={Feeling} />
            <Route exact path={'/understanding'} component={Understanding} />
            <Route exact path={'/supported'} component={Supported} />
            <Route exact path={'/comments'} component={Comments} />
            <Route exact path={'/thank-you'} component={ThankYou} />
            <Route exact path={'/review'} component={Review} />
          
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
