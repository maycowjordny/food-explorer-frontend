import { Container } from "./styles"
import { Button } from "../button"
import DishPlaceholder from "../../assets/dish.png"
import { api } from "../../service/api"

export function Favorites({ data }) {
    const dishImage = data.image ? `${api.defaults.baseURL}/image/${data.image}` : DishPlaceholder
    return (
        <Container>
            <img src={dishImage} alt="Prato" />
            <div>
                <h1>{data.name}</h1>
                <Button
                    title="Remover"
                    id="remove-button" />
            </div>
        </Container>
    )
}