import { Container } from "./styles";
import { ButtonSvg } from "../buttonSvg";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";
import { Resize } from "../../utils/index";
import dishPlaceholder from "../../assets/dish.png"
import { api } from "../../service/api";

export function Order({ data, ...rest }) {
    const isMobile = Resize()

    async function handleRemoveDish(orderId, dishId) {
        try {
            await api.delete(`/orders/${orderId}`, {
                data: {
                    dishes: [{ id: dishId }]
                }
            });

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <Container {...rest}>
            {
                data.dishes.map((dish, index) => (

                    <div key={index} className="modal">

                        <img src={dish.image ? `${api.defaults.baseURL}/image/${dish.image}` : dishPlaceholder} alt="imagem do prato" />
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

                            <ButtonSvg title="Excluir" id="button-delete" onClick={() => handleRemoveDish(data.id, dish.id)} />
                        </div>
                    </div>
                ))
            }
        </Container>
    )
}