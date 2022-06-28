import styled from 'styled-components'

export const ContactContainer = styled.div`
    height: 100vh;
    color: ${props => props.darkMode ? "#F3F7F7" : "#0D0D0D"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
        font-size: 30px;
        margin-bottom: 10px;
        transition: all 0.5s;
    }
    form{
        width: 70vw;
        height: 70vh;   
        background-color: ${props => props.darkMode ? "#000000" : "#FFFFFF"};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: all 0.5s;
        div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 10px 0;
            label{
                font-weight: bold;
                font-size: 15px;
            }
            input[type="text"], input[type="email"], textarea{
                border: 1px solid ${props => props.darkMode ? "#F3F7F7" : "#0D0D0D"};
                font-size: 20px;
                padding: 5px 10px;
                border-radius: 5px;
                background-color: transparent;
                width: 60vw;
                transition: all 0.5s;
                @media (min-width: 1000px) {
                    width: 30vw;
                }
            }
            textarea{
                resize: none;
                height: 100px;
                ::-webkit-scrollbar {
                    width: 5px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent;
                }
                ::-webkit-scrollbar-thumb {
                    border-radius: 20px;
                    background: #888888;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #555555;
                }
            }
            input[type="submit"]{
                width: 60vw;
                height: 35px;
                background-color: #5CB9F2;
                color: ${props => props.darkMode ? "#F3F7F7" : "#0D0D0D"};
                border: none;
                border-radius: 20px;
                font-weight: bold;
                font-size: 15px;
                transition: all 0.5s;
                &:hover{
                    background-color: ${props => props.darkMode ? "#AADEFD" : "#2473A4"};
                    color: ${props => props.darkMode ? "#0D0D0D" : "#F3F7F7"};
                }
                @media (min-width: 1000px) {
                    width: 30vw;
                }
            }
        }
    }
`