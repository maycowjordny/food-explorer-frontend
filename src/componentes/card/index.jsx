import { Container } from "./styles";
import dishImage from "../../assets/imageDish.png"
import { FiMinus, FiPlus, FiHeart, FiEdit } from "react-icons/fi";
import { ButtonSvg } from "../buttonSvg"
import { Button } from "../button";
import { Resize, IsAdm } from "../../utils/index";

export function Card({ data, ...rest }) {

    const isAdm = IsAdm()

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
                <span>R$ {data.price}</span>
            </section>
            <div id="quantity">
                {
                    isAdm ? null : <> <FiMinus />{data.quantity}<FiPlus /> </>
                }

            </div>
            {
                isAdm ? null : <Button title="incluir" />
            }

        </Container>
    )
}