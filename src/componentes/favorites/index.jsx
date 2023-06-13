import { Container } from "./styles"
import dishImage from "../../assets/imageDish.png"
import { ButtonSvg } from "../buttonSvg"

export function Favorites({ data }) {
    return (
        <Container>
            <img src={dishImage} alt="Prato" />
            <div>
                <h1>{data.name}</h1>
                <ButtonSvg
                    title="Remover dos Favoritos"
                />
            </div>
        </Container>
    )
}