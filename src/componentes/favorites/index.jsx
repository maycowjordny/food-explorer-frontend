import { Container } from "./styles"
import { Button } from "../button"
import { api } from "../../service/api"
import dishPlaceholder from "../../assets/dish.png"
import { Link } from "react-router-dom";

export function Favorites({ data, onDelete, ...rest }) {
    const imageUrl = data.image ? `${api.defaults.baseURL}/image/${data.image}` : dishPlaceholder;

    async function handleRemoveFavoriteDish() {
        onDelete(data.id)
        await api.delete(`/favorites/${data.id}`)
    }
    return (
        <Container {...rest}>

            <Link to={`/details/${data.id}`}>
                <img src={imageUrl} alt="Prato" />
            </Link>
            <div>
                <h1>{data.name}</h1>
                <Button
                    title="Remover"
                    id="remove-button"
                    onClick={handleRemoveFavoriteDish}
                />
            </div>

        </Container>
    )
}