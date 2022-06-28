import styled from 'styled-components'

export const Skill = styled.div`
    box-shadow: 2px 2px 3px 1px ${props => props.darkMode ? "rgba(250, 250, 250, 0.2)" : "rgba(0, 0, 0, 0.2)"};
    background-color: ${props => props.darkMode ? "#181818" : "#FFFFFF"};
    transition: background-color 0.5s, box-shadow 0.5s;
    &:hover{
        background-color: ${props => props.darkMode ? "#0D0D0D" : "#F3F7F7"};
    }
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 15px ;
    margin: 10px;
    p{
        font-size: 15px;
        @media (min-width: 680px) {
            font-size: 25px;
        }
        text-align: center;
    }
    img{
        width: 8vw;
        height: 8vw;
        &.flag{
            border-radius: 10px;
            overflow: hidden;
        }
    }
`
