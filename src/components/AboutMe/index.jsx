import {AboutMeContainer, HobbieContainer} from './styles'
import {useState, useEffect} from 'react'
import ptBrWords from '../../assets/translation/pt-br.json'
import enUsWords from '../../assets/translation/en-us.json'
import {IoIosPaper, IoMdPin} from 'react-icons/io'

export default function AboutMe(props) {
    const [languageUsage, setLanguageUsage] = useState(ptBrWords)
    const [downloadLink, setDownloadLink] = useState("https://drive.google.com/file/d/1jLua_EmrXwM211fJ-Y-uzdO8wi077Fng/view?usp=sharing")

    useEffect(() => {
        if(props.language === 'PT-BR'){
            setLanguageUsage(ptBrWords)
            setDownloadLink("https://drive.google.com/file/d/1jLua_EmrXwM211fJ-Y-uzdO8wi077Fng/view?usp=sharing")
        }else{
            setLanguageUsage(enUsWords)
            setDownloadLink("https://drive.google.com/file/d/1S4RbZK5H-ScnAlnaZgYbL2TGLf6oNSsL/view?usp=sharing")
        }
    }, [props.language])

    
    return(
        <AboutMeContainer darkMode={props.darkMode} id="about-me">
            <div className='header'>
                <h2>{languageUsage[4].aboutMe[0]}</h2>
            </div>
            <div className='about'>
                <p>
                    {languageUsage[4].aboutMe[1]}
                </p>
                <div className='links'>
                    <div>
                        <IoIosPaper/>
                        <a href={downloadLink} target="_blank">Download CV</a>
                    </div>
                    <div>
                        <IoMdPin/>
                        <a href="https://www.google.com/maps/place/Recife/" target="_blank">Recife, PE - {languageUsage[4].aboutMe[8]}</a>
                    </div>
                </div>
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

        </AboutMeContainer>
    )
}