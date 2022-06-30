import styled from 'styled-components'

export const ProgressContainer = styled.div`
    height: 10px;
    width: 80%;
    background-color: #c6c6c6;
    border-radius: 10px;
    transition: all 0.5s;
    overflow: hidden;
    `

export const Progress = styled.div`
    height: 100%;
    width: ${props => props.percent}%;
    background-color: ${props => props.color};
`
