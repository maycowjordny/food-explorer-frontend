import { Container } from "./styles";



export function ButtonSvg({ icon: Icon, title, ...rest }) {

    return (
        <Container type="button"
            {...rest}>
            {Icon && <Icon size={22} />}
            {title}
        </Container>
    )
}