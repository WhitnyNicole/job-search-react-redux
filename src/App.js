import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import InterviewsList from './containers/InterviewsList';
import NewInterview from './components/NewInterview'
import { connect } from 'react-redux'
import { getInterviews } from './redux/actions/interviews'
import Navbar from "./components/Navbar";

class App extends React.Component {
  componentDidMount() {
    this.props.getInterviews();

  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/interviews" component={InterviewsList} />
            <Route exact path="/interviews/new" component={NewInterview} />
          </Switch>
        </Router>
      </div>
    )
  };
}

export default connect(
  null, 
    { getInterviews }
  )(App);
