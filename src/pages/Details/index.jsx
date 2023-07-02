import { Container } from "./styles";
import { Header } from "../../componentes/header";
import { Footer } from "../../componentes/footer"
import { CardDetails } from "../../componentes/cardDetails";
import { ButtonSvg } from "../../componentes/buttonSvg";
import { RiArrowLeftSLine } from "react-icons/ri";

export function Details() {
    return (
        <Container>
            <Header />
            <main>
                <div id="button-back">
                    <ButtonSvg icon={RiArrowLeftSLine} title="voltar" />
                </div>

                <CardDetails data={
                    {
                        name: "Salada Ravanello",
                        description: "Rabanetes folhas verdes e molho agridoce salpicados com gergelim",
                        quantity: "01",
                    }
                } />
            </main>
            <Footer />
        </Container>
    )
}