import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
   <RulesContainer>
     <div>
        <h2>How to play dice game</h2>
        <p>select any number</p>
        <p>Click on dice image</p>
        <p>After clicking on dice if selected number is equal to dice-number you will get points as the square of dice-number</p>
        <p>If you get wrong guess then 1 point will be deducted</p>
    </div>
   </RulesContainer>
  )
}

export default Rules

const RulesContainer=styled.div`
max-width: 800px;
border: 1px solid #f32505f1;
background-color: #f5ece9;
padding: 20px;
align-items: end;
display: flex;
justify-content: center;
margin:10px  auto;
border-radius: 10px;
`;