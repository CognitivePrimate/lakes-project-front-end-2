import { createGlobalStyle } from "styled-components";
import device from './media-query-sizes';

const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --orange:  #ee5e1b;;
        --orangeHover: #f17841;
        --boxShadowPrimary: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
        --boxShadowPrimaryHover: 3px 3px 4px 4px rgba(0, 0, 0, 0.3);
        --textPrimary: #ffffff;
        --transitionPrimary: .3s;
        
    }

    @keyframes FadeIn {
            from {
                opacity: 0;
            }to{
                opacity:1;
            }
    }


    * {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }


    body {
        margin: 0;
        padding: 0;
        background-color: rgb(240, 240, 240);
    }

    h1 {
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--textPrimary);
    }

    h3 {
        font-size: .9rem;
        font-weight: 500;
        color: var(--textPrimary);
    }

    p {
        font-size: 1rem;
        color: var(--textPrimary);
    }

    a {
        text-decoration: none;
        width: 100%;
    }

    input {
        border: hidden; 
        border-bottom: groove #ffffff;
        height: 30px;  
    }


    input:focus {
        background: #FEF2EC;
        outline: none;
    }

    textarea {
        border: hidden;
        border-left: groove #ffffff;
        border-bottom: groove;
        resize: none;
    }

    textarea:focus {
        background: #FEF2EC;
        outline: none;
    }

    button {
        margin: .2rem;
        padding: .3rem .5rem;
        color: var(--textPrimary);
        box-shadow: var(--boxShadowPrimary);
        background: var(--orange);
        border: none;
        cursor: pointer;
        border-radius: .25rem;
        transition: var(--transitionPrimary)
    }

    button:hover {
        box-shadow: var(--boxShadowPrimaryHover);
        background: var(--orangeHover);
    }

    
    @media ${device.mobileL}{
        h1 {
            font-size: 1.8rem;
            font-weight: 500;
        }

        h3 {
            font-size: 1.0rem;
            font-weight: 500;
        }

        p {
            font-size: .8rem;
        }

    }

    @media ${device.tablet}{
        h1 {
            font-size: 2rem;
            font-weight: 600;
        }

        h3 {
            font-size: 1.2rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
        }
    }

    @media ${device.desktopM}{
        h1 {
            font-size: 2rem;
            font-weight: 600;
        }

        h3 {
            font-size: 1.2rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
        }
    }

`

export default GlobalStyle;