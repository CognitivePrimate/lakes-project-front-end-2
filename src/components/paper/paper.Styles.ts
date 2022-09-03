import styled from 'styled-components';
import device from '../../media-query-sizes';

 export const Wrapper = styled.div`
 /* @media ${device.mobileS}{ */
   padding: .5rem;
   width: 100%;
   box-sizing: border-box;
   border-radius: var(--borderRadiusPrimary);
   animation: FadeIn .7s;
   box-shadow: var(--boxShadowPrimary);
   transition: var(--transitionPrimary);
 /* } */
 
`