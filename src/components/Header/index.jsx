import { HeaderContainer } from './styles'
import { AiOutlineHome, AiOutlineUser, AiOutlineBulb, AiOutlineBarChart, AiOutlinePhone } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState, useEffect, useContext } from 'react'
import ptBrWords from '../../assets/translation/pt-br.json'
import enUsWords from '../../assets/translation/en-us.json'
import { ConfigContext } from '../../pages/Home'

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [languageUsage, setLanguageUsage] = useState(ptBrWords)
    const { language, darkMode } = useContext(ConfigContext)

    useEffect(() => {
        if (language === 'PT-BR') {
            setLanguageUsage(ptBrWords)
        } else {
            setLanguageUsage(enUsWords)
        }
    }, [language])

    const headerItems =
        <ul className={showMobileMenu ? 'active' : ''}>
            <li>
                <a href="#presentation">
                    <AiOutlineHome size={20} /> <span>{languageUsage[0].header[0]}</span>
                </a>
            </li>
            <hr />
            <li>
                <a href="#about-me">
                    <AiOutlineUser size={20} /> <span>{languageUsage[0].header[1]}</span>
                </a>
            </li>
            <hr />
            <li>
                <a href="#projects">
                    <AiOutlineBulb size={20} /> <span>{languageUsage[0].header[2]}</span>
                </a>
            </li>
            <hr />
            <li>
                <a href="#skills">
                    <AiOutlineBarChart size={20} /> <span>{languageUsage[0].header[3]}</span>
                </a>
            </li>
            <hr />
            <li>
                <a href="#contact">
                    <AiOutlinePhone size={20} /> <span>{languageUsage[0].header[4]}</span>
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