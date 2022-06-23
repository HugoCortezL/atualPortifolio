import RateStar from '../RateStar'
import {Skill} from './styles'

export default function SkillContainer(props) {

    return(
        <Skill darkMode={props.darkMode}>
            {props.children}
            <p>
                {props.text}
            </p>
            <RateStar count={props.count}/>
        </Skill>
    )
}