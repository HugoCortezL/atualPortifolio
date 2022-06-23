import styled from 'styled-components'

export const ContactContainer = styled.div`
    height: 100vh;
    color: ${props => props.darkMode ? "#F3F7F7" : "#0D0D0D"};
    display: flex;
    align-items: center;
    justify-content: center;
    form{
        width: 70vw;
        height: 70vh;   
        background-color: ${props => props.darkMode ? "#1e1e1e" : "#dfe2e2"};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            label{
                
            }
            input[type="text"], input[type="email"]{
                border: none;
                font-size: 20px;
                padding: 5px 10px;
                background-color: ${props => props.darkMode ? "#0D0D0D" : "#F3F7F7"};;
            }
        }
    }
`