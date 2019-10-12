import React from 'react'
import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: seashell;
`;


const Home = () => (
    <Wrapper>
        <Title>
            <h1>Home page</h1>
        </Title>
    </Wrapper>
)

export default Home 