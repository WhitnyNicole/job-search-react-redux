import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createReview } from '../redux/actions/reviews.js';
import styled from "styled-components"

const Title = styled.h1`
  font-size: 15px;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: seashell;
`;

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

class NewReview extends Component {

    constructor(props) {
        debugger
        super(props)
        this.state = {
            inquiry: " ",
            answer: " "
    }
}

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = e => {
        e.preventDefault()
        this.props.createReview(this.state, this.props.interview.id, this.props.history)
        this.setState({
            inquiry: " ",
            answer: " "
        })
    }

    render() {
        return (
            <Wrapper>
                <Title>
                    <div>
                        <h1>Create your Review!</h1>
                        <form onSubmit={this.submit}>
                            <label>Inquiry:</label>
                            <input 
                                onChange={this.handleChange}
                                required 
                                type="text" 
                                name="inquiry" 
                                value={this.state.inquiry} 
                            />
                            <br />
                            <label>Answer:</label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                required
                                name="answer" 
                                value={this.state.answer} 
                            />
                            <br />
                            <br />
                            <Button type="submit">Create Review</Button>
                        </form>
                    </div>
                </Title>
            </Wrapper>
        )
    }
}

export default connect(null, {
    createReview
})(NewReview)