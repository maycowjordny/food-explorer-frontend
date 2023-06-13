import { Container } from "./styles"
import dishImage from "../../assets/imageDish.png"
import { Button } from "../button"

export function Favorites({ data }) {
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