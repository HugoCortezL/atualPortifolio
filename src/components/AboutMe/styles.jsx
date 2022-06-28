import styled from 'styled-components'

export const AboutMeContainer = styled.div`
    height: 100vh;
    background-color: ${props => props.darkMode ? "#181818" : "#FFFFFF"};
    color: ${props => props.darkMode ? "#FFFFFF" : "#181818"};
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > div{
        width: 90vw;
        @media (min-width: 1000px) {
            width: 50vw;
        }
        text-align: center;
        &.header{
            display: flex;
            align-items: flex-end;
            justify-content: center;
            h2{
                font-size: 30px;
            }
            a{
                margin: 0  0 10px 5px;
                color: #5CB9F2;
            }
        }
        &.about{
            @media (min-width: 1000px) {
                font-size: 20px;
            }
            font-size: 15px;
            margin: 15px 0;
        }
        &.hobbies{
            h3{
                font-size: 25px;
            }
            & > div{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
            }
        }
        &.based{
            margin-top: 50px;
            font-size: 15px;
            a{
                text-decoration: none;
                color: #5CB9F2
            }
        }
    }
`

export const HobbieContainer = styled.div`
    @media (min-width: 1000px) {
        font-size: 15px;
        padding: 10px 15px;
    }
    font-size: 13px;
    display: flex;
    padding: 5px 10px;
    border-radius: 8px;
    margin: 10px;
    background: ${props => props.darkMode ? "linear-gradient(145deg, #161616, #1a1a1a)" : "linear-gradient(145deg, #e6e6e6, #ffffff)"};
    box-shadow:  ${props => props.darkMode ? "5px 5px 7px #141414, -5px -5px 7px #1c1c1c" : "5px 5px 10px #d4d4d4, -5px -5px 10px #ffffff"};
    transition: all 0.5s;
    cursor: default;
`