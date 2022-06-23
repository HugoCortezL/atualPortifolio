import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    background: ${props => props.darkMode ? "#0D0D0D" : "#F3F7F7"};
    transition: all 0.5s;
    div.config{
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: absolute;
        @media (min-width: 1000px) {
            position: fixed;
        }
        top: 70px;
    }
    button.language-button{
        background: transparent;
        padding: 5px;
        border: none;
        border-radius: 5px;
        box-shadow: 1px 1px 2px 1px ${props => props.darkMode ? "rgba(250,250,250,0.2)" : "rgba(0,0,0,0.2)"};
        color: #5CB9F2;
        cursor: pointer;
        margin-left: 20px;
        transition: all 0.5s;
        span{
            font-weight: bold;
            background-color: black;
            background-size: 100%;
            background-repeat: repeat;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
        }
        &.PT-BR span{
            background-image: linear-gradient(45deg, #009c3b, #ffdf00);
        }
        &.EN-US span{
            background-image: linear-gradient(45deg, #c60c30 30%, #002868);
        }
    }
    button.dark-mode{
        padding: 8px;
        border-radius: 50%;
        border: none;
        background: transparent;
        cursor: pointer;
    }
`