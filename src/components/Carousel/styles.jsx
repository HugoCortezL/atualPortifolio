import styled from 'styled-components'

export const CarouselContainer = styled.div`
    @media (min-width: 1000px) {
        width: 80%;
        height: 70%;
    }
    width: 99%;
    height: 60%;
    margin-top: 20px;
    display: flex;
    align-items: flex-end;
    background: #ffd;
    position: relative;
`

export const Principal = styled.div`
    @media (min-width: 1000px) {
        background: linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0) 50%), ${props => `url(${props.background})`};
    }
    background: linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0) 75%), ${props => `url(${props.background})`};
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    a{
        text-decoration: none;
        div.text{
            height: 100%;
            @media (min-width: 1000px) {
                width: 30%;
                margin-left: 30px;
            }
            width: 50%;
            margin-left: 10px;
            color: #F3F7F7;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;
            h3{
                @media (min-width: 1000px) {
                    font-size: 25px;
                }
                font-size: 20px;
                margin-bottom: 5px;
            }
            div.name{
                p{
                    @media (min-width: 1000px) {
                        font-size: 16px;
                    }
                    font-size: 13px;
                }
            }
            div.tech{
                ul{
                    list-style: none;
                    li{
                        margin: 5px 0;
                        @media (min-width: 1000px) {
                            font-size: 16px;
                        }
                        font-size: 13px;
                    }
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