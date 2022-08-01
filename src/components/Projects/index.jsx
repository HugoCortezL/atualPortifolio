import {ProjectsContainer} from './styles'
import {useState, useEffect} from 'react'
import ptBrWords from '../../assets/translation/pt-br.json'
import enUsWords from '../../assets/translation/en-us.json'

import Carousel from '../Carousel'

export default function Projects(props) {
    const [languageUsage, setLanguageUsage] = useState(ptBrWords)

    useEffect(() => {
        if(props.language === 'PT-BR'){
            setLanguageUsage(ptBrWords)
        }else{
            setLanguageUsage(enUsWords)
        }
    }, [props.language])
    
    return(
        <ProjectsContainer darkMode={props.darkMode} id="projects">
            <h2>{languageUsage[5].projects[0]}</h2>
            <Carousel darkMode={props.darkMode} data={languageUsage[5].projects[1].Items}/>
        </ProjectsContainer>
    )
}