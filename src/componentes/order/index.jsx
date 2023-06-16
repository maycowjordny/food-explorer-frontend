import { Container } from "./styles";
import dishImage from "../../assets/imageDish.png"
import { ButtonSvg } from "../buttonSvg";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";
import { Resize } from "../../utils/index";

export function Order({ data, ...rest }) {
    const isMobile = Resize()
    return (
        <Container{...rest}>
            <img src={dishImage} alt="imagem do prato" />
            <div>
                {
                    isMobile < WINDOW_MOBILE_WIDTH ?
                        <div className="info">
                            <span>{data.quantity} x {data.name} </span>
                            <b>R${data.price}</b>
                        </div>
                        :
                        <div className="info">
                            <span>{data.quantity} x {data.name} <b>R${data.price}</b>  </span>
                        </div>
                }

                <div>
                    <ButtonSvg title="Excluir" id="button-delete" />
                </div>
            </div>

        </Container>
    )
}