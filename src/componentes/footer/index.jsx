import { Container } from "./styles";
import logoFooter from "../../assets/logoFooter.png"



export function Footer() {
    return (
        <Container>
            <div id="logo">
                <img src={logoFooter} alt="logo" />
                <h6>food explorer</h6>
            </div>

            <div id="rights-reserved">
                <span>© 2023 - Todos os direitos reservados.</span>
            </div>

        </Container>
    )
}