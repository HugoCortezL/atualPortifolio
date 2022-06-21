import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: #fff;
    @media (min-width: 1000px) {
        padding: 0 50px;
    }
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2{
        @media (min-width: 1000px) {
            font-size: 25px;
        }
        span{
            color: #5CB9F2;
        }
    }
    nav.web-menu ul{
        display: none;
        list-style: none;
        @media (min-width: 1000px) {
            display: flex;
            align-items: center;
        }
        hr{
            display: none;
        }
        li{
            margin-left: 35px;
            a{
                display: flex;
                align-items: center;
                font-size: 17px;
                cursor: pointer;
                padding-bottom: 3px;
                border-bottom: 2px solid transparent;
                transition: border 0.3s;
                &:hover{
                    border-bottom: 2px solid #5CB9F2;
                    transition: border 0.3s;
                }
                span{
                    margin-left: 10px;
                }
            }
        }
    }
    nav.mobile-menu{
        @media (min-width: 1000px) {
            display: none !important;
        }
        position: relative;
        ul{
            list-style: none;
            display: none;
            &.active{
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 30px;
                right: 0px;
                background-color: #FFF;
                box-shadow: 1px 1px 22px 2px rgba(0,0,0,0.2);
                padding: 5px 0;
                li{
                    padding: 15px;
                    a{
                        display: flex;
                        align-items: center;
                        font-size: 20px;
                        cursor: pointer;
                        padding-bottom: 3px;
                        span{
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
    }
`