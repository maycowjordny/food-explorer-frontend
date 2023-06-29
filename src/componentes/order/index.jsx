import { Container } from "./styles";
import dishImage from "../../assets/imageDish.png"
import { ButtonSvg } from "../buttonSvg";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";
import { Resize } from "../../utils/index";

export function Order({ data, ...rest }) {
    const isMobile = Resize()
    console.log(data)
    return (
        <Container{...rest}>
            {
                data.dishes.map((dish, index) => (
                    <div key={index}>
                        <img src={dishImage} alt="imagem do prato" />
                        <div>
                            {
                                isMobile < WINDOW_MOBILE_WIDTH ?
                                    <div className="info">
                                        <span>{dish.quantity} x {dish.name} </span>
                                        <b>R${dish.price}</b>
                                    </div>
                                    :
                                    <div className="info">
                                        <span>{dish.quantity} x {dish.name} <b>R${dish.price}</b>  </span>
                                    </div>
                            }

                            <div>
                                <ButtonSvg title="Excluir" id="button-delete" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </Container>
    )
}