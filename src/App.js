import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home';
import ReviewsList from './containers/ReviewsList';
import NewReview from './components/NewReview'
import { connect } from 'react-redux'
import { getReviews } from './redux/actions/reviews'

class App extends React.Component {
  componentDidMount() {
    this.props.getReviews();

  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/reviews" component={ReviewsList} />
          <Route exact path="/reviews/new" component={NewReview} />
        </Router>
      </div>
    )
  };
}

export default connect(
  null, 
    { getReviews }
  )(App);
