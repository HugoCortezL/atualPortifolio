import {Container} from './styles'
import {useEffect, useState} from 'react'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'

import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import Skills from '../../components/Skills'
import SocialMedias from '../../components/SocialMedias'


export default function Home() {
    const [languageUsage, setLanguageUsage] = useState("PT-BR")
    const [darkMode, setDarkMode] = useState(false)
    const [lightModeComponent, setLightModeComponent] = useState(<></>)

    function handlerLanguageChange(){
        if(languageUsage === 'PT-BR'){
            setLanguageUsage('EN-US')
        }else{
            setLanguageUsage('PT-BR')
        }
    }

    useEffect(() => {
        if(darkMode){
            setLightModeComponent(
            <button onClick={(() => setDarkMode(!darkMode))} className="dark-mode"><BsFillMoonFill size={25} color={"#FFF"}/></button>)
        }else{
            setLightModeComponent(
            <button onClick={(() => setDarkMode(!darkMode))} className="dark-mode"><BsFillSunFill size={25} color={"#000"}/></button>)
        }
    }, [darkMode])

    return(
        <Container darkMode={darkMode}>
            <div className="config">
                {lightModeComponent}
                <button onClick={handlerLanguageChange} className={`language-button ${languageUsage}`}> {languageUsage == "PT-BR" ? "Idioma" : "Language"}: <span>{languageUsage}</span></button>
            </div>
            <SocialMedias darkMode={darkMode}/>
            <Header language={languageUsage} darkMode={darkMode}/>
            <Presentation language={languageUsage}  darkMode={darkMode}/>
            <Skills language={languageUsage}  darkMode={darkMode}/>
        </Container>
    )
}