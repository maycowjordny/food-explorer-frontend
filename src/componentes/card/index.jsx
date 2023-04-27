import { Container } from "./styles";
import dishImage from "../../assets/imageDish.png"
import { FiMinus, FiPlus, FiHeart, FiEdit } from "react-icons/fi";
import { ButtonSvg } from "../buttonSvg"
import { Button } from "../button";
import { Resize, IsAdm } from "../../utils/index";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants"

export function Card({ data, ...rest }) {

    const isAdm = IsAdm()
    const isMobile = Resize();


    return (
        <Container {...rest}>
            <div id="favorite">
                {
                    isAdm ?
                        <ButtonSvg icon={FiEdit} /> : <ButtonSvg icon={FiHeart} />
                }
            </div>
            <section>
                <img src={dishImage} alt="imagem do prato" />
                <p>{data.name}</p>
                {
                    isMobile > WINDOW_MOBILE_WIDTH ? <h5>{data.description}</h5> : null

                }
                <span>R${data.price}</span>
            </section>

            <div id="buttons-wrapper">

                <div id="quantity">
                    {
                        isAdm ? null : <> <ButtonSvg icon={FiMinus} /> {data.quantity} <ButtonSvg icon={FiPlus} />  </>
                    }

                </div>
                {
                    isAdm ? null : <Button title="incluir" id="add-button" />
                }
            </div>

        </Container>
    )
}