import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createReview } from '../redux/actions/reviews.js';


class NewReview extends Component {

    state ={
        company_name: " ",
        phone_screen: "",
        on_site: "",
        offer: "",
        asked_questions: "",
        notes: " "
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
                    <label>Company Name:</label>
                    <input 
                        onChange={this.handleChange}
                        required 
                        type="text" 
                        name="company_name" 
                        value={this.state.company_name} 
                    />
                    <br />
                    <label>Phone Screen?</label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        required
                        name="phone_screen" 
                        value={this.state.phone_screen} 
                    />
                    
                    <label>On Site?</label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        required 
                        name="on_site" 
                        value={this.state.on_site} 
                    />
                    
                    <label>Asked Questions?</label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        required 
                        name="asked_questions" 
                        value={this.state.asked_questions} 
                    />
                    <br />
                    <label>Notes?</label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        required 
                        name="notes" 
                        value={this.state.notes} 
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