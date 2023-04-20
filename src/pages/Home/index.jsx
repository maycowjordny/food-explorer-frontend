import { Container } from "./styles";
import bannerHome from "../../assets/bannerHome.png"
import { Header } from "../../componentes/header"


export function Home() {

    return (
        <Container>
            <Header />
            <div id="banner-home">

                <img src={bannerHome} alt="imagem de biscoitos" />

                <div id="text">
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.
                    </p>
                </div>

            </div>

        </Container>
    )
}