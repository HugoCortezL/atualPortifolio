import { ProjectsContainer } from './styles'
import { useContext } from 'react'
import { ConfigContext } from '../../pages/Home'
import { translate } from '../../utils/translate'

import Carousel from '../Carousel'

export default function Projects() {
    const { language, darkMode } = useContext(ConfigContext)

    return (
        <ProjectsContainer darkMode={darkMode} id="projects">
            <h2>{translate(language, "Projetos")}</h2>
            <Carousel />
        </ProjectsContainer>
    )
}