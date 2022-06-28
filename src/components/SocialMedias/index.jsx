import {SocialMediasContainer} from './styles'
import {AiFillLinkedin, AiFillGithub, AiFillMediumCircle} from 'react-icons/ai'

export default function SocialMedias(props) {
    
    return(
        <SocialMediasContainer darkMode={props.darkMode}>
            <a href="https://www.linkedin.com/in/hugo-vitorino/" target="_blank">
                <AiFillLinkedin size={35} color={"#0072b1"}/>
            </a>
            <a href="https://github.com/HugoCortezL?tab=repositories" target="_blank">
                <AiFillGithub size={35} className="github-icon"/>
            </a>
            <a href="https://medium.com/@hugocortez" target="_blank">
                <AiFillMediumCircle size={35} className="medium-icon"/>
            </a>
        </SocialMediasContainer>
    )
}