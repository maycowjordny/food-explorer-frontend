import { Container } from "./styles";
import { ButtonSvg } from "../buttonSvg";
import dishImage from "../../assets/imageDish.png"
import { IsAdm, Resize } from "../../utils/index";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Button } from "../button";
import { Tags } from "../Tags"

import { RiFileListLine } from "react-icons/ri"

export function CardDetails({ data, ...rest }) {

    const isAdm = IsAdm()

    return (
        <Container{...rest}>

            <main>

                <div className="box-one">
                    <img src={dishImage} alt="imagem do prato" />
                </div>

                <div className="box-two">

                    <div id="name-dish">
                        <p>{data.name}</p>
                    </div>
                    <div id="description">
                        <p>{data.description}</p>
                    </div>

                    <div id="tags">
                        <span><Tags title={"alface"} /></span>
                        <span><Tags title={"cebola"} /></span>
                        <span><Tags title={"pão naan"} /></span>
                        <span><Tags title={"pepino "} /></span>
                        <span><Tags title={"rabanete"} /></span>
                        <span><Tags title={"tomate"} /></span>
                    </div>


                    <div id="buttons-wrapper">
                        <div id="quantity">
                            {
                                isAdm ? null : <> <ButtonSvg icon={FiMinus} /> {data.quantity} <ButtonSvg icon={FiPlus} /> </>
                            }

                        </div>
                        <div id="button-edit-add">
                            {
                                isAdm ? <Button title="Editar prato" id="edit-button" /> : <Button title="pedir ∙ R$ 25,00" id="add-button" icon={RiFileListLine} />
                            }
                        </div>
                    </div>
                </div>
            </main>

        </Container >
    )
}