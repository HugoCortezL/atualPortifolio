import styled from 'styled-components'

export const SkillsContainer = styled.div`
    height: 100vh;
    background-color: ${props => props.darkMode ? "#181818" : "#FFFFFF"};
    color: ${props => props.darkMode ? "#FFFFFF" : "#181818"};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 80vw;
    div.header{
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
        & div{
            background-color: ${props => props.darkMode ? "#1e1e1e" : "#f9fbfb"};
            padding: 10px 0;
            @media (min-width: 680px) {
                font-size: 20px;
            }
            font-size: 15px;
            cursor: pointer;
            &.active{
                background-color: ${props => props.darkMode ? "#242424" : "#FFFFFF"};
                box-shadow: 0 4px 10px 0 ${props => props.darkMode ? "rgba(250, 250, 250, 0.2)" : "rgba(0, 0, 0, 0.2)"};
            }
        }
        h2{
        }
    }
    div.content{
        div.skill{
            display: none;
            margin-top: 20px;
            &.active{
                display: grid;
                @media (min-width: 1200px) {
                    grid-template-columns: repeat(auto-fit, 19vw);
                }
                @media (min-width: 680px) {
                    grid-template-columns: repeat(auto-fit, 25vw);
                }
                grid-template-columns: repeat(auto-fit, 36vw);
                background-color: ${props => props.darkMode ? "#242424" : "#f7f7f7"};
                border-radius: 5px;
                height: 65vh;
                overflow-y: scroll;
                ::-webkit-scrollbar {
                    width: 10px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent;
                }
                ::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    background: #888;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
            }
        }
    }
    
`