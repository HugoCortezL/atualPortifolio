import {SkillsContainer, Content, HorizontalCarousel, SkillsCarousel, Skill} from './styles'
import {useState, useEffect} from 'react'
import ptBrWords from '../../assets/translation/pt-br.json'
import enUsWords from '../../assets/translation/en-us.json'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import ProgressBar from '../ProgressBar'
import reactLogo from '../../assets/images/react-logo.png'
import nodeLogo from '../../assets/images/node-logo.png'
import typescriptLogo from '../../assets/images/typescript-logo.png'
import cssLogo from '../../assets/images/css-logo.png'
import gitLogo from '../../assets/images/git-logo.png'
import graphqlLogo from '../../assets/images/graphql-logo.png'
import mysqlLogo from '../../assets/images/mysql-logo.png'
import htmlLogo from '../../assets/images/html-logo.png'
import pythonLogo from '../../assets/images/python-logo.png'
import usaFlag from '../../assets/images/eua-flag.png'
import brFlag from '../../assets/images/brazil-flag.png'
import spFlag from '../../assets/images/spain-flag.png'

export default function Skills(props) {
    const [languageUsage, setLanguageUsage] = useState(ptBrWords)

    try{
        let mouseDownHard = false, mouseDownSoft = false;
        let startXHard, startXSoft;
    
        let startDraggingHard = e => {
            mouseDownHard = true;
            startXHard = e.pageX - document.getElementById('hardSkills').offsetLeft;
            document.getElementById('hardSkills').style.cursor = "grabbing"
        };
        
        let stopDraggingHard = event => {
            mouseDownHard = false;
            document.getElementById('hardSkills').style.cursor = "grab"
        };

        document.getElementById('hardSkills').addEventListener('mousemove', (e) => {
            e.preventDefault();
            if(!mouseDownHard) { return; }
            const x = e.pageX - document.getElementById('hardSkills').offsetLeft;
            const scroll = x - startXHard;
            document.getElementById('hardSkills').scrollLeft -= scroll;
        });

        let startDraggingSoft = e => {
            mouseDownSoft = true;
            startXSoft = e.pageX - document.getElementById('softSkills').offsetLeft;
            document.getElementById('softSkills').style.cursor = "grabbing"
        };
        
        let stopDraggingSoft = event => {
            mouseDownSoft = false;
            document.getElementById('softSkills').style.cursor = "grab"
        };

        document.getElementById('softSkills').addEventListener('mousemove', (e) => {
            e.preventDefault();
            if(!mouseDownSoft) { return; }
            const x = e.pageX - document.getElementById('softSkills').offsetLeft;
            const scroll = x - startXSoft;
            document.getElementById('softSkills').scrollLeft -= scroll;
        });


        document.getElementById('hardSkills').addEventListener('mousedown', startDraggingHard, false);
        document.getElementById('hardSkills').addEventListener('mouseup', stopDraggingHard, false);
        document.getElementById('hardSkills').addEventListener('mouseleave', stopDraggingHard, false);

        document.getElementById('softSkills').addEventListener('mousedown', startDraggingSoft, false);
        document.getElementById('softSkills').addEventListener('mouseup', stopDraggingSoft, false);
        document.getElementById('softSkills').addEventListener('mouseleave', stopDraggingSoft, false);
    }
    catch{}

    const hardSkills = [reactLogo, nodeLogo, typescriptLogo, cssLogo, gitLogo, graphqlLogo, mysqlLogo, htmlLogo, pythonLogo, usaFlag, brFlag, spFlag]

    useEffect(() => {
        if(props.language === 'PT-BR'){
            setLanguageUsage(ptBrWords)
        }else{
            setLanguageUsage(enUsWords)
        }
    }, [props.language])

    const hardSkillsForRight = () => {
        document.getElementById('hardSkills').scrollLeft += window.screen.width / 2
    }

    const hardSkillsForLeft = () => {
        document.getElementById('hardSkills').scrollLeft -= window.screen.width / 2
    }

    const softSkillsForRight = () => {
        document.getElementById('softSkills').scrollLeft += window.screen.width / 2
    }

    const softSkillsForLeft = () => {
        document.getElementById('softSkills').scrollLeft -= window.screen.width / 2
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
                                    languageUsage[2].skills[1].hardSkills.map((skill, index) => <Skill darkMode={props.darkMode} key={skill.id}>
                                        <p>{skill.name}</p>
                                        <img src={hardSkills[index]}/>
                                        <ProgressBar color={skill.color} percent={skill.score}/>
                                    </Skill>)
                                }
                            </div>
                        </div>
                    </SkillsCarousel>
                </HorizontalCarousel>
                <HorizontalCarousel>
                    <h2>{languageUsage[2].skills[0]}</h2>
                    <SkillsCarousel darkMode={props.darkMode}>
                        <div className='options'>
                            <button className="left" onClick={softSkillsForLeft}>
                                <BsChevronLeft size={30} color={props.darkMode ? "#F3F7F7" : "#181818"}/>
                            </button>
                            <button className="right" onClick={softSkillsForRight}>
                                <BsChevronRight size={30} color={props.darkMode ? "#F3F7F7" : "#181818"}/>
                            </button>
                        </div>
                        <div className='skills-container'>
                            <div id='softSkills'>
                                {
                                    languageUsage[2].skills[2].softSkills.map(skill => <Skill darkMode={props.darkMode} key={skill.id}>
                                        <p>{skill.name}</p>
                                        <img src={skill.src}/>
                                        <ProgressBar color={skill.color} percent={skill.score}/>
                                    </Skill>)
                                }
                            </div>
                        </div>
                    </SkillsCarousel>
                </HorizontalCarousel>
            </Content>
        </SkillsContainer>
    )
}