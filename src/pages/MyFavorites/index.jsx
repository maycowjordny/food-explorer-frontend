import { Container } from "./styles";
import { NewHeader } from "../../componentes/newHeader"
import { Footer } from "../../componentes/footer"
import { Favorites } from "../../componentes/favorites";
import { useState, useEffect } from "react";
import { api } from "../../service/api";


export function MyFavorites({ data, ...rest }) {
    const [favorites, setFavorites] = useState([]);
    console.log(favorites)
    useEffect(() => {
        async function FecthFavorites() {
            const response = await api.get(`/favorites`)
            setFavorites(response.data)
        }
        FecthFavorites()
    }, [])
    return (
        <Container>
            <NewHeader />
            <main>
                <h2>Meus Favoritos</h2>
                <section>
                    {
                        favorites.map(favorite => (
                            <Favorites
                                key={favorite.id}
                                data={favorite}
                            />
                        ))
                    }
                </section>
            </main>
            <Footer />
        </Container>
    )
}