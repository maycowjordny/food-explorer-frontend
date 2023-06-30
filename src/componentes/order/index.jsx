import { Container } from "./styles";
import dishImage from "../../assets/imageDish.png"
import { ButtonSvg } from "../buttonSvg";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";
import { Resize } from "../../utils/index";
import DishPlaceholder from "../../assets/dish.png"
import { api } from "../../service/api";

export function Order({ data, ...rest }) {
    const isMobile = Resize()
    const dishImage = data.image ? `${api.defaults.baseURL}/image/${data.image}` : DishPlaceholder
    return (
        <Container{...rest}>
            {
                data.dishes.map((dish, index) => (
                    <div key={index} className="modal">
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

                            <ButtonSvg title="Excluir" id="button-delete" />
                        </div>
                    </div>
                ))
            }
        </Container>
    )
}