import styled from "styled-components";
import  device from '../../media-query-sizes';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    width: 100vw;
    margin-bottom:.5rem;
    background: var(--orange);
    color: var(--textPrimary);
    padding: 0 .5rem;
    box-shadow: var(--boxShadowPrimary);
    transition: var(--transitionPrimary);

    #displayName{
        size: 2rem;
    }

    h1 {
        width: 30%;
    }

    @media ${device.mobileL} {

    }

    @media ${device.tablet} {
        padding: 1rem;
    }

    @media ${device.desktopM} {
        padding: 0 1rem;
    }
`