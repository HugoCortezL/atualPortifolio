import {Container} from './styles'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import {useState} from 'react'

export default function Home() {
    const [languageUsage, setLanguageUsage] = useState("PT-BR")

    function handlerLanguageChange(){
        if(languageUsage === 'PT-BR'){
            setLanguageUsage('EN-US')
        }else{
            setLanguageUsage('PT-BR')
        }
    }
    
    return(
        <Container>
            <button onClick={handlerLanguageChange} className={`language-button ${languageUsage}`}> Language: <span>{languageUsage}</span></button>
            <Header language={languageUsage}/>
            <Presentation language={languageUsage}/>
        </Container>
    )
}