import { CarouselContainer, Principal, Items, Item } from './styles'
import { useState, useEffect, useContext } from 'react'

import todoAppImage from '../../assets/images/todoapp-image.png'
import hackerhankImage from '../../assets/images/hackerhank-clone-image.png'
import pokedexImage from '../../assets/images/pokedex-image.png'
import { ConfigContext } from '../../pages/Home'
import { translate } from '../../utils/translate'
import data from '../../utils/data.json'

export default function Carousel() {
    const [itemToShow, setItemToShow] = useState(0)
    const { language, darkMode } = useContext(ConfigContext)

    const itemsImage = [todoAppImage, hackerhankImage, pokedexImage]

    const handlerClick = (key) => {
        setItemToShow(key)
    }

    useEffect(() => {
        const autoChangeItem = setInterval(() => {
            if (itemToShow + 1 == data.projects.length) {
                setItemToShow(0)
            } else {
                setItemToShow(itemToShow + 1)
            }
        }, 8000);
        return () => clearInterval(autoChangeItem);
    }, [itemToShow]);

    useEffect(() => {
        setItemToShow(0)
    }, [])


    return (
        <CarouselContainer darkMode={darkMode}>
            <Principal background={itemsImage[itemToShow]}>
                <a href={data.projects[itemToShow].github} target="_blank" title={translate(language, "Abri no GitHub")}>
                    <div className='text'>
                        <div className='name'>
                            <h3>
                                {translate(language, data.projects[itemToShow].name)}
                            </h3>
                            <p>
                                {translate(language, data.projects[itemToShow].description)}
                            </p>
                        </div>
                        <div className="tech">
                            <h3>{translate(language, "Tecnologias")}</h3>
                            <ul>
                                {data.projects[itemToShow].tech.map(tech => <li key={tech.id}>{tech.name}</li>)}
                            </ul>
                        </div>
                    </div>
                </a>
            </Principal>
            <Items>
                {data.projects.map((item, index) => <Item
                    key={item.key}
                    background={itemsImage[index]}
                    onClick={() => handlerClick(item.key)}
                    className={itemToShow == item.key ? 'active' : ''}
                >
                    <div className="timer"></div>
                </Item>)}
            </Items>
        </CarouselContainer>
    )
}