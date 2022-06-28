import styled from 'styled-components'

export const RateStarContainer = styled.div`
    width: calc(${props => props.width}px * 20);
    height: 20px;
    overflow: hidden;
    white-space: nowrap;
    @media (min-width: 680px) {
        width: calc(${props => props.width}px * 25);
        height: 25px;
    }
    svg{
        @media (min-width: 680px) {
            height: 25px;
            width: 25px;
        }
        height: 20px;
        width: 20px;
    }
`