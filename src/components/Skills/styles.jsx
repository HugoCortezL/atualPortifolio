import styled from 'styled-components'

export const SkillsContainer = styled.div`
    height: 100vh;
    background-color: ${props => props.darkMode ? "#181818" : "#FFFFFF"};
    color: ${props => props.darkMode ? "#FFFFFF" : "#181818"};
    padding: 15vh 10vw 10vh;
    transition: all 0.5s;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
`

export const HorizontalCarousel = styled.div`
    width: 100%;
    height: 50%;
    h2{
        font-size: 30px;
    }
`

export const SkillsCarousel = styled.div`
    height: calc(100% - 46px);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .options{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        top: 50%;
        bottom: 50%;
        button{
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
            border: none;
            background: ${props => props.darkMode ? "linear-gradient(145deg, #161616, #1a1a1a)" : "linear-gradient(145deg, #e6e6e6, #ffffff)"};
            box-shadow:  ${props => props.darkMode ? "5px 5px 7px #141414, -5px -5px 7px #1c1c1c" : "5px 5px 10px #d4d4d4, -5px -5px 10px #ffffff"};
            transition: all 0.5s;
            cursor: pointer;
        }
    }
    .skills-container{
        width: 92%;
        height: 100%;
        #hardSkills{
            height: 100%;
            display: grid;
            align-items: center;
            grid-template-columns: repeat(12, 21%);
            overflow-x: scroll;
            padding: 0 -10px;
            scroll-behavior: smooth;
            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
    `

export const Skill = styled.div`
    margin: 0 10px;
    height: 90%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 1px 1px 4px 2px ${props => props.darkMode ? "rgba(250, 250, 250, 0.3)" : "rgba(0,0,0,0.3)"};
    border-radius: 10px;
    p{
        font-size: 20px;
    }
    img{
        height: 50%;
        width: 50%;
    }
`