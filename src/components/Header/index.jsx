import { HeaderContainer } from './styles'
import { AiOutlineHome, AiOutlineUser, AiOutlineBulb, AiOutlineBarChart, AiOutlinePhone } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState, useContext } from 'react'
import { ConfigContext } from '../../pages/Home'
import { translate } from '../../utils/translate'

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const { language, darkMode } = useContext(ConfigContext)

    const headerItems =
        <ul className={showMobileMenu ? 'active' : ''}>
            <li>
                <a href="#presentation">
                    <AiOutlineHome size={20} /> <span>{translate(language, "Apresentação")}</span>
                </a>
            </li>
            <hr />
            <li>
                <a href="#about-me">
                    <AiOutlineUser size={20} /> <span>{translate(language, "Sobre mim")}</span>
                </a>
            </li>
            <hr />
            <li>
                <a href="#projects">
                    <AiOutlineBulb size={20} /> <span>{translate(language, "Projetos")}</span>
                </a>
            </li>
            <hr />
            <li>
                <a href="#skills">
                    <AiOutlineBarChart size={20} /> <span>{translate(language, "Habilidades")}</span>
                </a>
            </li>
            <hr />
            <li>
                <a href="#contact">
                    <AiOutlinePhone size={20} /> <span>{translate(language, "Fale comigo")}</span>
                </a>
            </li>
        </ul>

    return (
        <HeaderContainer darkMode={darkMode}>
            <h2><span>Hugo</span> Cortez</h2>
            <nav className='web-menu'>
                {headerItems}
            </nav>
            <nav className='mobile-menu'>
                <GiHamburgerMenu size={25} onClick={(() => setShowMobileMenu(!showMobileMenu))} />
                {headerItems}
            </nav>
        </HeaderContainer>
    )
}