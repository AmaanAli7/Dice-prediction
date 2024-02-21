import styled from 'styled-components'
import { Button } from '../styled/button';


const StartGame = ({toggle}) => {
  return (

<Container>
  <div><img 
  src='/images/dices 1.png'/></div>
  <div className='content'>
    <h1>Dice Game</h1>
<Button onClick={toggle}>Play Now</Button>
  </div>
  </Container>    
  );
  
};

export default StartGame

const Container= styled.div`
   display: flex;

 max-width: 1180px;
  height:100vh;
  align-items: center;
  margin:0px auto;
  .content h1{
    font-size: 96px;
    white-space: nowrap;
  }
  `;
