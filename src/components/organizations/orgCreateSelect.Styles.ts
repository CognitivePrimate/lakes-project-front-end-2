import styled from 'styled-components';
import device from '../../media-query-sizes';
import Paper from "../paper/paper";

export const Wrapper = styled.div`
 /* @media ${device.mobileS}{ */
   display: flex;
   flex-direction: column;
   align-content: center;
   justify-content: center;
   width: 90vw;
   padding: 0;
   margin: 0;
   border: none;
   animation: FadeIn .7s;
   /* box-shadow: var(--boxShadowPrimary); */
   transition: var(--transitionPrimary);

 /* } */
 
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  border: none;
  animation: FadeIn .7s;
  transition: var(--transitionPrimary);
  h2, h3 {
    margin: .25rem;
    padding: .25rem;
    color: black;
  }
`