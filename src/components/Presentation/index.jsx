import { PresentationContainer } from './styles'
import myPhoto from '../../assets/images/my-photo.png'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { useContext } from 'react'
import { ConfigContext } from '../../pages/Home'
import { translate } from '../../utils/translate'

export default function Presentation() {
    const { language, darkMode } = useContext(ConfigContext)

    return (
        <PresentationContainer darkMode={darkMode} id="presentation">
            <div className='text'>
                <p>
                {translate(language, "Olá, eu sou")}
                </p>
                <p className="my-name">
                    <span>Hugo</span> Cortez
                </p>
                <p className="description">
                {translate(language, "Desenvolvedor fullstack, morando no Brasil.")}
                </p>
                <button>
                    <a href="#about-me">
                        <AiOutlineArrowDown size={30} /> <span>{translate(language, "Sobre mim")}</span>
                    </a>
                </button>
            </div>
            <div className='image'>
                <img src={myPhoto} />
            </div>

        </PresentationContainer>
    )
}