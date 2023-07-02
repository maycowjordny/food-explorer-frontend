import { Container } from "./styles"
import { Button } from "../button"
import { api } from "../../service/api"
import dishPlaceholder from "../../assets/dish.png"

export function Favorites({ data, onDelete, ...rest }) {
    const imageUrl = data.image ? `${api.defaults.baseURL}/image/${data.image}` : dishPlaceholder;

    async function handleRemoveFavoriteDish() {
        if (confirm("Deseja remover esse prato dos favoritos?")) {
            onDelete(data.id)
            await api.delete(`/favorites${data.id}`)
        }

    }
    return (
        <Container {...rest}>
            <img src={imageUrl} alt="Prato" />
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