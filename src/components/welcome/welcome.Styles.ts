import styled from 'styled-components';
import device from '../../media-query-sizes';
import Paper from "../paper/paper";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;
  
  h2{
    color: black;
  }
  p {
    color: black;
  }

  input {
    text-align: center;
  }

  button {
    width: 90%;
  }

 
  /* justify-content: center; */
`