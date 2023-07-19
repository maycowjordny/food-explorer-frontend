import { Container } from "./styles";
import { ButtonSvg } from "../buttonSvg";
import { IsAdm } from "../../utils/index";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Button } from "../button";
import { Tags } from "../Tags"
import { RiFileListLine } from "react-icons/ri"
import { useState } from "react";
import { Input } from "../Input";
import dishPlaceholder from "../../assets/dish.png"
import { api } from "../../service/api";
import { Link } from "react-router-dom";

export function CardDetails({ data, ...rest }) {

    const isAdm = IsAdm()
    const [count, setCount] = useState(1)
    async function createOrder(id) {
        try {
            const order = {
                dishes: [
                    {
                        id,
                        quantity: count
                    }

                ]

            }
            const response = await api.post("/orders", order)
            alert("Prato adicionado ao seu pedido")
            const orderId = response.data.order_id
            localStorage.setItem("orderId", orderId)

        } catch (error) {
            alert("Não foi possível adicionar o prato ao seu pedido. Por favor, tente novamente mais tarde.");
        }
    }


    const imageUrl = data.image ? `${api.defaults.baseURL}/image/${data.image}` : dishPlaceholder;
    return (
        <Container {...rest}>

            <main>
                <div className="box-one">
                    <img src={imageUrl} alt="imagem do prato" />
                </div>

                <div className="box-two">

                    <div id="name-dish">
                        <p>{data.name}</p>
                    </div>
                    <div id="description">
                        <p>{data.description}</p>
                    </div>

                    {
                        data.ingredients &&
                        <div id="tags">
                            {
                                data.ingredients.map(ingredient =>
                                    <Tags
                                        key={ingredient.id}
                                        name={ingredient.name}
                                    />)
                            }
                        </div>
                    }


                    <div id="buttons-wrapper">
                        <div id="quantity">
                            {
                                isAdm ? null : <>
                                    <ButtonSvg icon={FiMinus} onClick={() => setCount(count == 1 || 0 ? count : count - 1)} />
                                    <Input id="input-number" type="number" value={count.toString().padStart('2', 0)} onChange={(e) => e.target.value} />
                                    <ButtonSvg icon={FiPlus} onClick={() => setCount(count + 1)} />
                                </>
                            }

                        </div>
                        <div id="button-edit-add">
                            {
                                isAdm ? <Link to={`/dish/${data.id}`}> <Button title="Editar prato" id="edit-button" /></Link>
                                    :
                                    <Button title={`incluir ∙ R$${data.price !== undefined ? data.price.toFixed(2) : "0.00"}`} id="add-button" icon={RiFileListLine} onClick={() => createOrder(data.id)} />
                            }
                        </div>
                    </div>
                </div>
            </main>

        </Container >
    )
}