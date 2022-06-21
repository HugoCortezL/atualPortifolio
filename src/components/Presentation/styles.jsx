import styled from 'styled-components'

export const PresentationContainer = styled.div`
    height: 100vh;
    padding: 0 50px;
    @media (min-width: 1100px) {
        padding-left: 100px;
        padding-right: 150px;
    }
    @media (min-width: 1300px) {
        padding-left: 200px;
        padding-right: 250px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 900px) {
        justify-content: space-between;
    }
    div.text{
        p{
            font-size: 30px;
            &.my-name{
                font-size: 45px;
                font-weight: bold;
                span{
                    color: #5CB9F2;
                }
            }
            &.description{
                font-size: 20px;
                margin-bottom: 10px;
            }
        }
        button{
            display: flex;
            align-items: center;
            font-size: 20px;
            padding: 10px 15px;
            cursor: pointer;
            transition: padding 0.5s;
            background-color: #2C5773;
            color: #FFFFFF;
            border: none;
            border-radius: 5px;
            span{
                margin-left: 10px;
            }
            &:hover{
                padding: 10px 40px;
                transition: padding 0.5s;
            }
        }
    }
    div.image{
        display: none;
        @media (min-width: 900px) {
            display: inline-block;
            border-radius: 50px;
            overflow: hidden;
        }
    }
`