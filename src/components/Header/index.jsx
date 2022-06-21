import {HeaderContainer} from './styles'
import {AiOutlineHome, AiOutlineUser, AiOutlineBulb, AiOutlineBarChart, AiOutlinePhone} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {useState} from 'react'

export default function Header() {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const headerItems = 
        <ul className={showMobileMenu ? 'active' : ''}>
                    <li>
                        <a>
                            <AiOutlineHome size={20}/> <span>Apresentação</span> 
                        </a>
                    </li>
                    <hr/>
                    <li>
                        <a>
                            <AiOutlineUser size={20}/> <span>Sobre mim</span>
                        </a>
                    </li>
                    <hr/>
                    <li>
                        <a>
                            <AiOutlineBulb size={20}/> <span>Projetos</span>
                        </a>
                    </li>
                    <hr/>
                    <li>
                        <a>
                            <AiOutlineBarChart size={20}/> <span>Habilidades</span>
                        </a>
                    </li>
                    <hr/>
                    <li>
                        <a>
                            <AiOutlinePhone size={20}/> <span>Contato</span>
                        </a>
                    </li>
                </ul>
    
    console.log(showMobileMenu)
    return(
        <HeaderContainer>
            <h2><span>Hugo</span> Cortez</h2>
            <nav className='web-menu'>
                {headerItems}
            </nav>
            <nav className='mobile-menu'>
                <GiHamburgerMenu size={25} onClick={(() => setShowMobileMenu(!showMobileMenu))}/>
                {headerItems}
            </nav>
        </HeaderContainer>
    )
}