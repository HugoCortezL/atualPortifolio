import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    z-index: 100;
    h2{
        font-size: 30px;
        color: ${props => props.darkMode ? "#F3F7F7" : "#0D0D0D"};
        transition: color 0.5s;
    }
`
