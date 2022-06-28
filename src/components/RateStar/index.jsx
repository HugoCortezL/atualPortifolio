import {RateStarContainer} from './styles'
import {AiFillStar} from 'react-icons/ai'

export default function RateStar(props) {

    return(
        <RateStarContainer width={props.count} title={props.count}>
            <AiFillStar color={"#FFD700"}/>
            <AiFillStar color={"#FFD700"}/>
            <AiFillStar color={"#FFD700"}/>
            <AiFillStar color={"#FFD700"}/>
            <AiFillStar color={"#FFD700"}/>
        </RateStarContainer>
    )
}