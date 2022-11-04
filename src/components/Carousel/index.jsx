import {CarouselContainer, Principal, Items, Item} from './styles'
import {useState, useEffect} from 'react'

import todoAppImage from '../../assets/images/todoapp-image.png'
import hackerhankImage from '../../assets/images/hackerhank-clone-image.png'
import pokedexImage from '../../assets/images/pokedex-image.png'


export default function Carousel(props) {
    const [itemToShow, setItemToShow] = useState(0)
    const [items, setItems] = useState(props.data)
    let tech = "Tecnologias utilizadas"

    const itemsImage = [todoAppImage, hackerhankImage, pokedexImage]
    
    useEffect(() => {
        setItems(props.data)
        if(tech === "Tecnologias utilizadas"){
            tech = "Technologies used"
        }else{
            tech = "Tecnologias utilizadas"
        }
    }, props.data)

    const handlerClick = (key) => {
        setItemToShow(key)
    }

    useEffect(() => {
        const autoChangeItem = setInterval(() => {
            if (itemToShow + 1 == items.length){
                setItemToShow(0)
            }else{
                setItemToShow(itemToShow + 1)
            }
        }, 8000);
        return () => clearInterval(autoChangeItem);
    }, [itemToShow]);

    useEffect(() => {
        setItemToShow(0)
    }, [])


    return(
        <CarouselContainer darkMode={props.darkMode}>
            <Principal background={itemsImage[itemToShow]}>
                <a href={items[itemToShow].github} target="_blank" title={items[itemToShow].title}>
                    <div className='text'>
                        <div className='name'>
                            <h3>{items[itemToShow].name}</h3>
                            <p>{items[itemToShow].description}</p>
                        </div>
                        <div className="tech">
                            <h3>{items[itemToShow].used}</h3>
                            <ul>
                                {items[itemToShow].tech.map(tech => <li key={tech.id}>{tech.name}</li>)}
                            </ul>
                        </div>
                    </div>
                </a>
            </Principal>
            <Items>
                {items.map((item, index) => <Item 
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