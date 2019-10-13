import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import InterviewsList from './containers/InterviewsList';
import ReviewsList from './containers/ReviewsList';
import NewReview from './components/NewReview'
import NewInterview from './components/NewInterview'
import { connect } from 'react-redux'
import { getInterviews } from './redux/actions/interviews'
import { getReviews } from './redux/actions/reviews'
import Navbar from "./components/Navbar";
import InterviewInfo from './containers/InterviewInfo'
import ReviewInfo from './containers/ReviewInfo'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  componentDidMount() {
    this.props.getInterviews();
    this.props.getReviews();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/interviews" component={InterviewsList}/>} />
            <Route exact path="/interviews/new" component={NewInterview} />
            <Route exact path="/reviews" component={ReviewsList}/>} />
            <Route exact path="/reviews/new" component={NewReview} />
            <Route exact path="/interviews/:id" component={InterviewInfo} />
            <Route exact path="/reviews/:id" component={ReviewInfo} />
          </Switch>
        </Router>
        <Footer />
      </div>
    )
  };
}

export default connect(
  null, 
    { getReviews, getInterviews }
  )(App);
