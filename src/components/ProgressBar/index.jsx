import { ProgressContainer, Progress } from './styles'

export default function Projects(props) {

    return (
        <ProgressContainer title={props.percent}>
            <Progress color={props.color} percent={props.percent} />
        </ProgressContainer>
    )
}