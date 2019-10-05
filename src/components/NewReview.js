import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createReview } from '../redux/actions/reviews.js';


class NewReview extends Component {

    state ={
        inquiry: " ",
        answer: "",
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = e => {
        e.preventDefault()
        this.props.createReview(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label>Inquiry?</label>
                    <input 
                        onChange={this.handleChange}
                        required 
                        type="text" 
                        name="inquiry" 
                        value={this.state.inquiry} 
                    />
                    <br />
                    <label>Answer?</label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        required
                        name="answer" 
                        value={this.state.answer} 
                    />
                    <br />
                <button type="submit">Create Review</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {
    createReview
})(NewReview)