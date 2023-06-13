import { Container } from "./styles";
import { NewHeader } from "../../componentes/newHeader"
import { Footer } from "../../componentes/footer"
import { Favorites } from "../../componentes/favorites";

export function MyFavorites({ data, ...rest }) {
    return (
        <Container>
            <NewHeader />
            <main>
                <h2>Meus Favoritos</h2>
                <section>
                    <Favorites data={
                        {
                            name: "Salada Ravanello"
                        }

                    } />
                    <Favorites data={
                        {
                            name: "Salada Ravanello"
                        }

                    } />
                    <Favorites data={
                        {
                            name: "Salada Ravanello"
                        }

                    } />
                    <Favorites data={
                        {
                            name: "Salada Ravanello"
                        }

                    } />
                    <Favorites data={
                        {
                            name: "Salada Ravanello"
                        }

                    } />
                    <Favorites data={
                        {
                            name: "Salada Ravanello"
                        }

                    } />

                </section>
            </main>
            <Footer />
        </Container>
    )
}