import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createInterview } from '../redux/actions/interviews.js';
import styled from "styled-components"
import Button from 'react-bootstrap/Button';

const Title = styled.h1`
  font-size: 15px;
  text-align: center;
  color: black;
`;

const Wrapper = styled.section`
  padding: 4em;
`;

class NewInterview extends Component {

    state ={
        company_name: "",
        location: "",
        salary: "",
        day: "",
        position: "",
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = e => {
        e.preventDefault()
        this.props.createInterview(this.state, this.props.history)
    }
    render() {
        return (
            <Wrapper>
                <Title>
            <div>
                <h1>Create an Interview!</h1>
                <form onSubmit={this.submit}>
                    <label>Company Name:</label>
                    <input 
                        onChange={this.handleChange}
                        required 
                        type="text" 
                        name="company_name"
                        placeholder={'Google'}
                        value={this.state.company_name} 
                    />
                    <br />
                    <label>Location:</label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        required
                        name="location"
                        placeholder={'New York City'} 
                        value={this.state.location} 
                    />
                    <br />
                    <label>Salary:</label>
                    <input
                        onChange={this.handleChange}
                        type="number"
                        required 
                        name="salary" 
                        placeholder={'90000'}
                        value={this.state.salary} 
                    />
                    <br />
                    <label>Date:</label>
                    <input
                        onChange={this.handleChange}
                        type="date"
                        required 
                        name="day" 
                        value={this.state.day} 
                    />
                    <br />
                    <label>Position:</label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        required 
                        name="position"
                        placeholder={'Software Engineer'} 
                        value={this.state.position} 
                    />
                    <br />
                    <br />
                <Button align="center" type="submit">Create Interview</Button>
                </form>
            </div>
            </Title>
            </Wrapper>
        )
    }
}

export default connect(null, {
    createInterview
})(NewInterview)