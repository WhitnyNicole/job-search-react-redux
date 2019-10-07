import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createInterview } from '../redux/actions/interviews.js';


class NewInterview extends Component {

    state ={
        company_name: " ",
        location: "",
        salary: "",
        day: "",
        position: "",
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit(e) {
        e.preventDefault()
        this.props.createInterview(this.state)
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
                    <label>Location?</label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        required
                        name="location" 
                        value={this.state.location} 
                    />
                    
                    <label>Salary?</label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        required 
                        name="salary" 
                        value={this.state.salary} 
                    />
                    
                    <label>Day?</label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        required 
                        name="day" 
                        value={this.state.day} 
                    />
                    <br />
                    <label>Position?</label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        required 
                        name="position" 
                        value={this.state.position} 
                    />
                    <br />
                <button type="submit">Create Interview</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {
    createInterview
})(NewInterview)