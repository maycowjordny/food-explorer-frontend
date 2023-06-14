import { Container } from "./styles";
import dishImage from "../../assets/imageDish.png"
import { ButtonSvg } from "../buttonSvg";

export function Order({ data, ...rest }) {
    return (
        <Container{...rest}>
            <img src={dishImage} alt="imagem do prato" />
            <div>
                <span>{data.quantity} x {data.name}  <b>R${data.price}</b> </span>

                <div>
                    <ButtonSvg title="Excluir" id="button-delete" />
                </div>
            </div>

        </Container>
    )
}