import {RateStarContainer} from './styles'
import {AiFillStar} from 'react-icons/ai'

export default function RateStar(props) {
    
    const width = props.count * 25

    return(
        <RateStarContainer width={width} title={props.count}>
            <AiFillStar color={"#FFD700"} size={25}/>
            <AiFillStar color={"#FFD700"} size={25}/>
            <AiFillStar color={"#FFD700"} size={25}/>
            <AiFillStar color={"#FFD700"} size={25}/>
            <AiFillStar color={"#FFD700"} size={25}/>
        </RateStarContainer>
    )
}