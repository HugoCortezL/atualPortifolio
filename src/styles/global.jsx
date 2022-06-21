import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body{
        font-size: 13px;
        background:  #F3F7F7;
        font-family: "Poppins", sans-serif;
        -webkit-font-smoothing: antialiased !important;
        -webkit-text-size-adjust: 100% !important;
        min-height: 100vh;
    }
    button{
        font-family: "Open Sans", sans-serif;
    }
`