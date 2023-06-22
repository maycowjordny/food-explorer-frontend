import { Container } from "./styles";
import { Input } from "../../componentes/Input";
import { Footer } from "../../componentes/footer"
import { FiX, FiSearch } from "react-icons/fi"
import { ButtonSvg } from "../../componentes/buttonSvg"
import { Header } from "../../componentes/header";
import { useState } from "react";
export function Menu() {

    const [menu, setMenu] = useState(true)

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <Container>
            <header>
                <ButtonSvg icon={FiX} title="Menu" id="button-menu" onClick={handleMenu} />
            </header>
            <main>
                <Input
                    icon={FiSearch}
                    placeholder="Busque por pratos ou ingredientes"
                />
                <ButtonSvg title="Profile" className="buttons-menu" />
                <div id="line"></div>
                <ButtonSvg title="Histórico de pedidos" className="buttons-menu" />
                <div id="line"></div>
                <ButtonSvg title="Sair" className="buttons-menu" />
            </main>
        </Container>
    )
}