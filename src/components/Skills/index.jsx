import {SkillsContainer, Content, HorizontalCarousel, SkillsCarousel, Skill} from './styles'
import {useState, useEffect} from 'react'
import ptBrWords from '../../assets/translation/pt-br.json'
import enUsWords from '../../assets/translation/en-us.json'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import ProgressBar from '../ProgressBar'

import htmlLogo from '../../assets/images/html-logo.png'
import cssLogo from '../../assets/images/css-logo.png'
import typescriptLogo from '../../assets/images/typescript-logo.png'
import reactLogo from '../../assets/images/react-logo.png'
import pythonLogo from '../../assets/images/python-logo.png'
import nodeLogo from '../../assets/images/node-logo.png'
import gitLogo from '../../assets/images/git-logo.png'
import graphqlLogo from '../../assets/images/graphql-logo.png'
import mysqlLogo from '../../assets/images/mysql-logo.png'
import euaFlag from '../../assets/images/eua-flag.png'
import spainFlag from '../../assets/images/spain-flag.png'
import brazilFlag from '../../assets/images/brazil-flag.png'



export default function Skills(props) {
    const [languageUsage, setLanguageUsage] = useState(ptBrWords)
    const [trasnlateHardSkills, setTranslateHardSkills] = useState(0)

    useEffect(() => {
        if(props.language === 'PT-BR'){
            setLanguageUsage(ptBrWords)
        }else{
            setLanguageUsage(enUsWords)
        }
    }, [props.language])

    const hardSkillsForRight = () => {
        document.getElementById('hardSkills').scrollLeft += 1000
    }

    const hardSkillsForLeft = () => {
        document.getElementById('hardSkills').scrollLeft -= 1000
    }

    return(
        <SkillsContainer darkMode={props.darkMode} id="skills">
            <Content>
                <HorizontalCarousel>
                    <h2>Hard Skills</h2>
                    <SkillsCarousel darkMode={props.darkMode}>
                        <div className='options'>
                            <button className="left" onClick={hardSkillsForLeft}>
                                <BsChevronLeft size={30} color={props.darkMode ? "#F3F7F7" : "#181818"}/>
                            </button>
                            <button className="right" onClick={hardSkillsForRight}>
                                <BsChevronRight size={30} color={props.darkMode ? "#F3F7F7" : "#181818"}/>
                            </button>
                        </div>
                        <div className='skills-container'>
                            <div id='hardSkills'>
                                {
                                    languageUsage[2].skills[1].hardSkills.map(skill => <Skill darkMode={props.darkMode} key={skill.id}>
                                        <p>{skill.name}</p>
                                        <img src={skill.src}/>
                                        <ProgressBar color={skill.color} percent={skill.score}/>
                                    </Skill>)
                                }
                            </div>
                        </div>
                    </SkillsCarousel>
                </HorizontalCarousel>
                <HorizontalCarousel>
                    <h2>{languageUsage[2].skills[0]}</h2>
                </HorizontalCarousel>
            </Content>
        </SkillsContainer>
    )
}