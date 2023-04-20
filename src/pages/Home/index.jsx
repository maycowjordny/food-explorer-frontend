import { Container } from "./styles";
import { Header } from "../../componentes/header"
import { BannerHome } from "../../componentes/bannerHome";
import { Footer } from "../../componentes/footer";

export function Home() {

    return (
        <Container>
            <Header />
            <main>
                <BannerHome />



            </main>
            <Footer />
        </Container>
    )
}