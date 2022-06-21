import styled from 'styled-components'

export const SocialMediasContainer = styled.div`
    display: flex;
    @media (min-width: 1100px) {
        position: fixed;
        left: 10px;
        bottom: 50vh;
        flex-direction: column;
    }
    @media (max-width: 1100px) {
        position: absolute;
        right: 10px;
        top: 70px;
    }
    a{
        width: 50px;
        height: 50px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 1px 1px 3px 2px ${props => props.darkMode ? "rgba(250,250,250,0.2)" : "rgba(0,0,0,0.2)"};
        background-color: ${props => props.darkMode ? "#0D0D0D" : "#F3F7F7"};
        transition: all 0.5s;
        @media (min-width: 1100px) {
            margin-bottom: 10px;
        }
        @media (max-width: 1100px) {
            margin-left: 10px;
        }
        *{
            &.github-icon{
                color: ${props => props.darkMode ? "#F3F7F7" : "#0D0D0D"};
                transition: all 0.5s;
            }
        }
    }
`