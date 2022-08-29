import styled from "styled-components";
import  device from '../../media-query-sizes';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    margin-bottom:.5rem;
    background: var(--orange);
    color: var(--textPrimary);
    padding: 0 .5rem;
    box-shadow: var(--boxShadowPrimary);
    transition: var(--transitionPrimary);

    @media ${device.mobileL} {

    }

    @media ${device.tablet} {
        padding: 1rem;
    }

    @media ${device.desktopM} {
        padding: 0 1rem;
    }
`