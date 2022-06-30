import styled from 'styled-components'

export const CarouselContainer = styled.div`
    width: 80%;
    height: 70%;
    margin-top: 20px;
    display: flex;
    align-items: flex-end;
    background: #ffd;
    position: relative;
`

export const Principal = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0) 50%), ${props => `url(${props.background})`};
    background-size: cover;
    background-position: center center;
    div.text{
        height: 100%;
        width: 30%;
        margin-left: 30px;
        color: #F3F7F7;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        h3{
            font-size: 25px;
            margin-bottom: 5px;
        }
        div.name{
            p{
                font-size: 16px;
            }
        }
        div.tech{
            ul{
                list-style: none;
                li{
                    margin: 5px 0;
                    font-size: 16px;
                }
            }
        }
    }
`

export const Items = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -40px;
    background: linear-gradient(0deg, rgba(255,255,255,0) 48%, rgba(0,0,0,0.8) 49%, rgba(255,255,255,0) 100%);
`

export const Item = styled.div`
    width: 150px;
    height: 80px;
    margin: 0 15px;
    background: linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), ${props => `url(${props.background})`};
    background-size:     cover;
    background-repeat:   no-repeat;
    background-position: center center;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    & .timer{
        width: 0%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }
    &.active .timer{
        width: 100%;
        height: 100%;
        transition: width 8s linear;
    }
`