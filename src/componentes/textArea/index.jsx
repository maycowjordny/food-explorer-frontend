import { Container } from "./styles";

export function TextArea({ ...rest }) {
    return (
        <Container{...rest}>
            <textarea {...rest}></textarea>
        </Container>
    )
}