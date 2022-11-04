import { ProjectsContainer } from './styles'
import { useState, useEffect, useContext } from 'react'
import ptBrWords from '../../assets/translation/pt-br.json'
import enUsWords from '../../assets/translation/en-us.json'
import { ConfigContext } from '../../pages/Home'

import Carousel from '../Carousel'

export default function Projects() {
    const [languageUsage, setLanguageUsage] = useState(ptBrWords)
    const { language, darkMode } = useContext(ConfigContext)

    useEffect(() => {
        if (language === 'PT-BR') {
            setLanguageUsage(ptBrWords)
        } else {
            setLanguageUsage(enUsWords)
        }
    }, [language])

    return (
        <ProjectsContainer darkMode={darkMode} id="projects">
            <h2>{languageUsage[5].projects[0]}</h2>
            <Carousel data={languageUsage[5].projects[1].Items} />
        </ProjectsContainer>
    )
}