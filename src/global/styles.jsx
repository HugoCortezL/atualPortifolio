import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        font-size: 13px;
        font-family: "Poppins", sans-serif;
        -webkit-font-smoothing: antialiased !important;
        -webkit-text-size-adjust: 100% !important;
        min-height: 100vh;
        &::-webkit-scrollbar {
            width: 8px;
        }
        
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        
        &::-webkit-scrollbar-thumb {
            background: #4c85aa;
            border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: #2C5773;
        }
    }
    button{
        font-family: "Open Sans", sans-serif;
    }
`