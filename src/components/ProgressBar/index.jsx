import {ProgressContainer, Progress} from './styles'

export default function Projects(props) {
    
    
    return(
        <ProgressContainer darkMode={props.darkMode} title={props.percent}>
            <Progress color={props.color} percent={props.percent}/>
        </ProgressContainer>
    )
}