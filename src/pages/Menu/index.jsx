import { Container } from "./styles";
import { Input } from "../../componentes/Input";
import { Footer } from "../../componentes/footer"
import { FiX, FiSearch } from "react-icons/fi"
import { ButtonSvg } from "../../componentes/buttonSvg"
export function Menu() {
    return (
        <Container>
            <header>
                <ButtonSvg icon={FiX} title="Menu" id="button-menu" />
            </header>
            <main>
                <Input
                    icon={FiSearch}
                    placeholder="Busque por pratos ou ingredientes"
                />
                <ButtonSvg title="Sair" id="button-logout" />
                <div id="line"></div>
            </main>
            <Footer />
        </Container>
    )
}