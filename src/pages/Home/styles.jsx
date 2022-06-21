import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    button.language-button{
        background: transparent;
        padding: 5px;
        border: none;
        border-radius: 5px;
        position: absolute;
        top: 70px;
        right: 10px;
        box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.3);
        cursor: pointer;
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
`