import {Container} from './styles'
import Header from '../../components/Header'
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
            <Header language={languageUsage}/>
            <button onClick={handlerLanguageChange} className={`language-button ${languageUsage}`}> Language: <span>{languageUsage}</span></button>
        </Container>
    )
}