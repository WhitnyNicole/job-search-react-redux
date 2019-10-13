import React from 'react'
import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const Wrapper = styled.section`
  padding: 4em;
`;


const Home = () => (
    <Wrapper>
        <Title>
            <h1>Job Search App</h1>
            <br />
            <p>Welcome! Use this app as a cental hub to store all job related resources!</p>
            <br />
            <br />
        </Title>
        <h1>Helpful Resources:</h1>
       <a href="https://teamcandor.com/salary/guide/">Salary Guide</a><br />
       <a href="https://leetcode.com/">Code Challenges</a><br />
       <a href="https://www.pramp.com/#/">Interview Practice</a>
    </Wrapper>
)

export default Home 