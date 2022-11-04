import { AboutMeContainer, HobbieContainer } from './styles'
import { useContext } from 'react'
import { IoIosPaper, IoMdPin } from 'react-icons/io'
import { ConfigContext } from '../../pages/Home'
import { translate } from '../../utils/translate'

export default function AboutMe() {
    const { language, darkMode } = useContext(ConfigContext)

    return (
        <AboutMeContainer darkMode={darkMode} id="about-me">
            <div className='header'>
                <h2>{translate(language, "Sobre Mim")}</h2>
            </div>
            <div className='about'>
                <p>
                    {translate(language, "Sou um desenvolvedor full stack apaixonado pela área e um eterno aprendiz. Gosto muito de me desafiar com novos projetos e funcionalidades para aumentar ainda mais o meu conhecimento. Atualmente venho focando meus estudos em React, Nodejs e GraphQL e tenho mais de um ano de atuação como desenvolvedor de software.")}
                </p>
                <div className='links'>
                    <div>
                        <IoIosPaper />
                        <a href={translate(language, "https://drive.google.com/file/d/1fAnvjrP3c74V-HLlz4TGRAIAzYRgfQSs/view?usp=sharing")} target="_blank">Download CV</a>
                    </div>
                    <div>
                        <IoMdPin />
                        <a href="https://www.google.com/maps/place/Recife/" target="_blank">Recife, PE - {translate(language, "Brasil")}</a>
                    </div>
                </div>
            </div>
            <div className='hobbies'>
                <h3>Hobbies</h3>
                <div>
                    <HobbieContainer darkMode={darkMode}>
                        {translate(language, "Violão")}
                    </HobbieContainer>
                    <HobbieContainer darkMode={darkMode}>
                        {translate(language, "Futebol")}
                    </HobbieContainer>
                    <HobbieContainer darkMode={darkMode}>
                        {translate(language, "Estudar")}
                    </HobbieContainer>
                    <HobbieContainer darkMode={darkMode}>
                        {translate(language, "Cozinhar")}
                    </HobbieContainer>
                    <HobbieContainer darkMode={darkMode}>
                        {translate(language, "Filmes / Series")}
                    </HobbieContainer>
                    <HobbieContainer darkMode={darkMode}>
                        {translate(language, "Amigos / Família")}
                    </HobbieContainer>
                </div>
            </div>

        </AboutMeContainer>
    )
}