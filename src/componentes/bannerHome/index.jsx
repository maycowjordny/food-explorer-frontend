import { Container } from "./styles";
import bannerHome from "../../assets/bannerHome.png"

export function BannerHome() {
    return (
        <Container>

            <img src={bannerHome} alt="imagem de biscoitos" />

            <div id="text">
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.
                </p>
            </div>

        </Container>
    )
}