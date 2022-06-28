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
        width: 70vw;
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
            font-size: 20px;
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
            }
        }
    }
`

export const HobbieContainer = styled.div`
    display: flex;
    padding: 5px 10px;
    margin: 10px;
    border: 1px solid red;
`