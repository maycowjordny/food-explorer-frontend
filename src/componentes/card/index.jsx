import { Container } from "./styles";
import { FiMinus, FiPlus, FiHeart, FiEdit } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { ButtonSvg } from "../buttonSvg"
import { Button } from "../button";
import { Resize, IsAdm } from "../../utils/index";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants"
import { Input } from "../Input";
import { useState } from "react";
import { api } from "../../service/api";
import { Link } from "react-router-dom";
import dishPlaceholder from "../../assets/dish.png"

export function Card({ data, ...rest }) {
    const isAdm = IsAdm()
    const isMobile = Resize();
    const [count, setCount] = useState(1)

    const [isFavorite, setIsFavorite] = useState(data.is_favorite)

    async function handleAddFavorite(id) {
        await api.post("/favorites", { dish_id: id })
        setIsFavorite(true)
    }

    async function handleRemoveFavorite(id) {
        await api.delete(`/favorites/${id}`)
        setIsFavorite(false)
    }

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
            <div id="favorite">
                {
                    isAdm ?
                        <Link to={`/dish/${data.id}`}><ButtonSvg icon={FiEdit} /></Link>
                        :
                        <ButtonSvg icon={isFavorite ? FaHeart : FiHeart}
                            onClick={() => (isFavorite ? handleRemoveFavorite(data.id) : handleAddFavorite(data.id))} />
                }
            </div>
            <Link to={`/details/${data.id}`}>
                <section>
                    <img src={imageUrl} alt="imagem do prato" />
                    <p>{data.name}</p>
                    {
                        isMobile > WINDOW_MOBILE_WIDTH ? <h5>{data.description}</h5> : null

                    }
                    <span>R${data.price.toFixed(2)}</span>
                </section>
            </Link>
            <div id="buttons-wrapper">

                <div id="quantity">
                    {
                        isAdm ? null : <>
                            <ButtonSvg icon={FiMinus} onClick={() => setCount(count === 1 || 0 ? count : count - 1)} />
                            <Input id="input-number" type="number" value={String(count).padStart(2, "0")} onChange={(e) => setCount(e.target.value)} />
                            <ButtonSvg icon={FiPlus} onClick={() => setCount(count + 1)} />
                        </>
                    }

                </div>
                {
                    isAdm ? null : <Button title="incluir" id="add-button" onClick={() => createOrder(data.id)} />
                }
            </div>

        </Container>
    )
}