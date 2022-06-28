import {SkillsContainer, Content} from './styles'
import {useState, useEffect} from 'react'
import ptBrWords from '../../assets/translation/pt-br.json'
import enUsWords from '../../assets/translation/en-us.json'
import SkillContainer from '../SkillContainer'

import htmlLogo from '../../assets/images/html-logo.png'
import cssLogo from '../../assets/images/css-logo.png'
import typescriptLogo from '../../assets/images/typescript-logo.png'
import reactLogo from '../../assets/images/react-logo.png'
import pythonLogo from '../../assets/images/python-logo.png'
import nodeLogo from '../../assets/images/node-logo.png'
import graphqlLogo from '../../assets/images/graphql-logo.png'
import mysqlLogo from '../../assets/images/mysql-logo.png'
import euaFlag from '../../assets/images/eua-flag.png'
import spainFlag from '../../assets/images/spain-flag.png'
import brazilFlag from '../../assets/images/brazil-flag.png'



export default function Skills(props) {
    const [languageUsage, setLanguageUsage] = useState(ptBrWords)
    const [skillActive, setSkillActive] = useState("hard")

    useEffect(() => {
        if(props.language === 'PT-BR'){
            setLanguageUsage(ptBrWords)
        }else{
            setLanguageUsage(enUsWords)
        }
    }, [props.language])

    function handleSkillChange(skills){
        setSkillActive(skills)
    }

    return(
        <SkillsContainer darkMode={props.darkMode} id="skills">
            <Content darkMode={props.darkMode}>
                <div className="header">
                    <div onClick={() => handleSkillChange("hard")} className={skillActive === 'hard' ? "active" : ""}>
                        <h2>
                            {languageUsage[2].skills[0]}
                        </h2>
                    </div>
                    <div onClick={() => handleSkillChange("soft")} className={skillActive === 'soft' ? "active" : ""}>
                        <h2 >
                            {languageUsage[2].skills[4]}
                        </h2>
                    </div>
                </div>
                <div className='content'>
                    <div className={`skill hard-skill-content ${skillActive === 'hard' ? "active" : ""}`}>
                        <SkillContainer text="HTML" count={4.7} darkMode={props.darkMode}>
                            <img src={htmlLogo} />
                        </SkillContainer>
                        <SkillContainer text="CSS" count={4.2} darkMode={props.darkMode}>
                            <img src={cssLogo} />
                        </SkillContainer>
                        <SkillContainer text="Typescript" count={3.4} darkMode={props.darkMode}>
                            <img src={typescriptLogo} />
                        </SkillContainer>
                        <SkillContainer text="React" count={3.8} darkMode={props.darkMode}>
                            <img src={reactLogo} />
                        </SkillContainer>
                        <SkillContainer text="Python" count={4} darkMode={props.darkMode}>
                            <img src={pythonLogo} />
                        </SkillContainer>
                        <SkillContainer text="Node.js" count={3.2} darkMode={props.darkMode}>
                            <img src={nodeLogo} />
                        </SkillContainer>
                        <SkillContainer text="GraphQL" count={2.4} darkMode={props.darkMode}>
                            <img src={graphqlLogo} />
                        </SkillContainer>
                        <SkillContainer text="MySQL" count={3} darkMode={props.darkMode}>
                            <img src={mysqlLogo} />
                        </SkillContainer>
                        <SkillContainer text={languageUsage[2].skills[1]} count={3.5} darkMode={props.darkMode}>
                            <img src={euaFlag} className="flag" />
                        </SkillContainer>
                        <SkillContainer text={languageUsage[2].skills[2]} count={3} darkMode={props.darkMode}>
                            <img src={spainFlag} className="flag" />
                        </SkillContainer>
                        <SkillContainer text={languageUsage[2].skills[3]} count={5} darkMode={props.darkMode}>
                            <img src={brazilFlag} className="flag" />
                        </SkillContainer>
                    </div>
                    <div className={`skill soft-skill-content ${skillActive === 'soft' ? "active" : ""} `} >
                    <SkillContainer text={languageUsage[2].skills[5]} count={4.3} darkMode={props.darkMode}>
                        <img src={brazilFlag} />
                    </SkillContainer>
                    <SkillContainer text={languageUsage[2].skills[6]} count={4.5} darkMode={props.darkMode}>
                        <img src={brazilFlag} />
                    </SkillContainer>
                    <SkillContainer text={languageUsage[2].skills[7]} count={5} darkMode={props.darkMode}>
                        <img src={brazilFlag} />
                    </SkillContainer>
                    <SkillContainer text={languageUsage[2].skills[8]} count={5} darkMode={props.darkMode}>
                        <img src={brazilFlag} />
                    </SkillContainer>
                    <SkillContainer text={languageUsage[2].skills[9]} count={5} darkMode={props.darkMode}>
                        <img src={brazilFlag} />
                    </SkillContainer>
                    <SkillContainer text={languageUsage[2].skills[10]} count={5} darkMode={props.darkMode}>
                        <img src={brazilFlag} />
                    </SkillContainer>
                    </div>
                </div>
            </Content>
        </SkillsContainer>
    )
}