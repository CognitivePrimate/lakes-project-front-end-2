import styled from 'styled-components';
import device from '../../media-query-sizes';
import Paper from "../paper/paper";

export const Wrapper = styled.div`
 /* @media ${device.mobileS}{ */
   display: flex;
   /* flex-direction: column; */
   align-content: center;
   justify-content: center;
   width: 100%;
   padding: 0;
   margin: 0;
   border: none;
   animation: FadeIn .7s;
   /* animation: slideDown .7s; */
   /* box-shadow: var(--boxShadowPrimary); */
   transition: var(--transitionPrimary);

 /* } */
 
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 90vw;
  padding: 1rem;
  margin: 0rem;
  border: none;
  animation: FadeIn .7s;
  /* box-shadow: var(--boxShadowPrimary); */
  transition: var(--transitionPrimary);
  
  .hoursBox{
    /* display: flex; */
    /* justify-content: flex-start; */
    text-align: left;
  }

  .hoursWorked {
    
  }

`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  /* max-height: 300px; */
  padding: 1rem;
  margin: .25rem .5rem;
  border: none;
  border-radius: var(--borderRadiusPrimary);
  animation: FadeIn .7s;
  box-shadow: var(--boxShadowPrimary);
  transition: var(--transitionPrimary);
  /* transition: max-height 0.5s; */
  /* background: rgb(238,94,27);
  background: linear-gradient(110deg, rgba(238,94,27,0.3) 1%, rgba(240,240,240,0.7) 25%); */
  background: rgb(240,240,240);
  background: linear-gradient(297deg, rgba(240,240,240,0.5718662464985995) 51%, rgba(238,94,27,0.5998774509803921) 89%, rgba(238,94,27,1) 100%);
  /* animation: slideDown .7s; */
  
  p{
    color: black;
  }

  img {
    display: flex;
    flex: 0;
    border-radius: 50%;
    object-fit: cover;
    /* margin-left: .25rem; */
  }

  &:hover {
    cursor: pointer;
    box-shadow: var(--boxShadowPrimaryHover)
  }

  .previewCard{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .textInfoBox{
      display: flex;
      flex-direction: column;
      flex: 1;
      margin-left: 2rem;
      /* margin-top: 0; */
      /* align-content: flex-end; */
      /* justify-content: left; */
      /* animation: slideDown .7s; */
      p {
        text-align: left;
        margin: .5rem 0;
      }
    }

`

export const HiddenPanel = styled.div`
    /* display: none; */
    display: flex;
    flex: 1;
    width: 100%;
    /* min-height: 0; */
    /* max-height: 500px; */
    margin: 0;
    /* transition: max-height var(--transitionPrimary); */
    overflow: hidden;
    animation: slideDown .7s;
    /* transition: var(--transitionPrimary); */
    .textInfoBox{
      display: flex;
      flex-direction: column;
      flex: 1;
      margin-left: 2rem;
      /* align-content: flex-end; */
      /* justify-content: left; */
      /* animation: slideDown .7s; */
      p {
        text-align: left;
        margin: .5rem 0;
      }
    }

    .dummybox{
      display: flex;
      flex: .25;
    }

`