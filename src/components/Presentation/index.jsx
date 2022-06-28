import {PresentationContainer} from './styles'
import myPhoto from '../../assets/images/my-photo.jpeg'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {useState, useEffect} from 'react'
import ptBrWords from '../../assets/translation/pt-br.json'
import enUsWords from '../../assets/translation/en-us.json'

export default function Presentation(props) {
    const [languageUsage, setLanguageUsage] = useState(ptBrWords)

    useEffect(() => {
        if(props.language === 'PT-BR'){
            setLanguageUsage(ptBrWords)
        }else{
            setLanguageUsage(enUsWords)
        }
    }, [props.language])
    
    return(
        <PresentationContainer darkMode={props.darkMode} id="presentation">
            <div className='text'>
                <p>
                    {languageUsage[1].presentation[0]}
                </p>
                <p className="my-name">
                    <span>Hugo</span> Cortez
                </p>
                <p className="description">
                {languageUsage[1].presentation[1]}
                </p>
                <button>
                    <a href="#about-me">
                        <AiOutlineArrowDown size={30}/> <span>{languageUsage[0].header[1]}</span>
                    </a>
                </button>
            </div>
            <div className='image'>
                <img src={myPhoto} />
            </div>

        </PresentationContainer>
    )
}