import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createReview } from '../redux/actions/reviews.js';
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

class NewReview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inquiry: "",
            answer: "",
            interview_id: props.interviewId
    }
}

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = e => {
        e.preventDefault()
        this.props.createReview(this.state, this.props.history)
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
                                placeholder={'Why do you want to work for us'} 
                                value={this.state.inquiry} 
                            />
                            <br />
                            <label>Answer:</label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                required
                                name="answer"
                                placeholder={'Because the company is amazing'}
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

export default connect(null,{createReview})(NewReview)