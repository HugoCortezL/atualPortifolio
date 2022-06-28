import {AboutMeContainer, HobbieContainer} from './styles'
import {useState, useEffect} from 'react'
import ptBrWords from '../../assets/translation/pt-br.json'
import enUsWords from '../../assets/translation/en-us.json'

export default function Contact(props) {
    const [languageUsage, setLanguageUsage] = useState(ptBrWords)
    
    useEffect(() => {
        if(props.language === 'PT-BR'){
            setLanguageUsage(ptBrWords)
        }else{
            setLanguageUsage(enUsWords)
        }
    }, [props.language])
    
    return(
        <AboutMeContainer darkMode={props.darkMode} id="about-me">
            <div className='header'>
                <h2>{languageUsage[4].aboutMe[0]}</h2>
                <a href="">Download CV</a>
            </div>
            <div className='about'>
                <p>
                {languageUsage[4].aboutMe[1]}
                </p>
            </div>
            <div className='hobbies'>
                <h3>Hobbies</h3>
                <div>
                    <HobbieContainer  darkMode={props.darkMode}>
                        {languageUsage[4].aboutMe[2]}
                    </HobbieContainer>
                    <HobbieContainer darkMode={props.darkMode}>
                        {languageUsage[4].aboutMe[3]}
                    </HobbieContainer>
                    <HobbieContainer darkMode={props.darkMode}>
                        {languageUsage[4].aboutMe[4]}
                    </HobbieContainer>
                    <HobbieContainer darkMode={props.darkMode}>
                        {languageUsage[4].aboutMe[5]}
                    </HobbieContainer>
                    <HobbieContainer darkMode={props.darkMode}>
                        {languageUsage[4].aboutMe[6]}
                    </HobbieContainer>
                    <HobbieContainer darkMode={props.darkMode}>
                        {languageUsage[4].aboutMe[7]}
                    </HobbieContainer>
                </div>
            </div>
            <div className='based'>
                {languageUsage[4].aboutMe[8]}
                <a href="https://www.google.com/maps/place/Recife/" target="_blank">Recife, PE - {languageUsage[4].aboutMe[9]}</a>
            </div>

        </AboutMeContainer>
    )
}