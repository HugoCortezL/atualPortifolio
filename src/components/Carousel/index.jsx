import {CarouselContainer, Principal, Items, Item} from './styles'
import {useState, useEffect} from 'react'

import brFlag from '../../assets/images/brazil-flag.png'
import usaFlag from '../../assets/images/eua-flag.png'
import spainFlag from '../../assets/images/spain-flag.png'

export default function Carousel(props) {
    const [itemToShow, setItemToShow] = useState(0)
    /*const items = [
        {
            key: 0,
            src: brFlag,
            name: "Clone do hackerhank",
            description: "Nesse projeto decidi fazer um clone do frontend da parte de login do hackerhank",
            tech: [
                {
                    id: 0,
                    name: "Typescript"
                },
                {
                    id: 1,
                    name: "React"
                },
                {
                    id: 2,
                    name: "Node"
                },
                {
                    id: 3,
                    name: "GraphQL"
                },
            ]
        },
        {
            key: 1,
            src: usaFlag,
            name: "Sistema de Chat",
            description: "Nesse projeto fiz um sistema de chat em tempo real para mostrar um pouco de minhas habilidades",
            tech: [
                {
                    id: 0,
                    name: "React"
                },
                {
                    id: 1,
                    name: "Firebase"
                },
                {
                    id: 2,
                    name: "GraphQL"
                },
                {
                    id: 3,
                    name: "NodeJs"
                },
            ]
        },
        {
            key: 2,
            src: spainFlag,
            name: "Sistema de reservas",
            description: "Nesse projeto fiz um sistema para que hoteis possam utilizar para ter um sistema onde consiga controlar as reservas",
            tech: [
                {
                    id: 0,
                    name: "React"
                },
                {
                    id: 1,
                    name: "NodeJs"
                },
                {
                    id: 2,
                    name: "MySQL"
                }
            ]
        }
    ]*/
    const [items, setItems] = useState(props.data)
    var tech = "Tecnologias utilizadas"
    
    useEffect(() => {
        setItems(props.data)
        if(tech === "Tecnologias utilizadas"){
            tech = "Technologies used"
        }else{
            tech = "Tecnologias utilizadas"
        }
    }, props.data)

    const handlerClick = (id) => {
        setItemToShow(id)
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

    console.log(items)

    return(
        <CarouselContainer darkMode={props.darkMode}>
            <Principal background={items[itemToShow].src}>
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
            </Principal>
            <Items>
                {items.map(item => <Item 
                                        key={item.key} 
                                        background={item.src} 
                                        onClick={() => handlerClick(item.key)} 
                                        className={itemToShow == item.key ? 'active' : ''}
                            >
                                <div className="timer"></div>
                            </Item>)}
            </Items>
        </CarouselContainer>
    )
}