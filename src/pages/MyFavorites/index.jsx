import { Container } from "./styles";
import { NewHeader } from "../../componentes/newHeader"
import { Footer } from "../../componentes/footer"
import { Favorites } from "../../componentes/favorites";
import { useState, useEffect } from "react";
import { api } from "../../service/api";


export function MyFavorites({ data, ...rest }) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        async function FecthFavorites() {
            const response = await api.get(`/favorites`)
            setFavorites(response.data)
        }
        FecthFavorites()
    }, [])

    function handleDeleteDish(id) {
        setFavorites(favorites.filter(favorite => favorite.id !== id));
    }

    return (
        <Container {...rest}>
            <NewHeader />
            <main>
                <h2>Meus Favoritos</h2>
                <section>
                    {
                        favorites.map(favorite => (
                            <Favorites
                                key={favorite.id}
                                data={favorite}
                                onDelete={handleDeleteDish}
                            />
                        ))
                    }
                </section>
            </main>
            <Footer />
        </Container>
    )
}