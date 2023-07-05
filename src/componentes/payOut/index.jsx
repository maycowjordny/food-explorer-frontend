import { Container } from "./styles"
import { Input } from "../Input";
import { FaRegCreditCard, FaQrcode } from "react-icons/fa";
import { useEffect, useState } from "react";
import { RiFileListLine, RiTimer2Line } from "react-icons/ri";
import { ImSpoonKnife, ImCancelCircle } from "react-icons/im";
import PIX from "../../assets/PIX.png";
import QRCODE from "../../assets/QRCODE.png";
import { Button } from "../button";
import { api } from "../../service/api";

export function PayOut() {

    const [order, setOrder] = useState([])
    const [payment, setPayment] = useState(false);
    const [status, setStatus] = useState(null)

    const handlePayment = () => {
        setPayment(!payment)
    }

    useEffect(() => {
        async function fetchOrder() {
            const orderId = localStorage.getItem("orderId")
            const response = await api.get(`/orders/${orderId}`)
            setOrder(response.data)
        }

        fetchOrder()

    }, [])

    return (
        <Container>
            <div className="buttons-wrapper">
                <Button
                    title="PIX"
                    id="button-pix"
                    icon={FaQrcode}
                    onClick={handlePayment}
                    className={!payment ? "active" : ""}

                />

                <Button
                    icon={FaRegCreditCard}
                    title="Crédito"
                    id="button-credit"
                    onClick={handlePayment}
                    className={payment ? "active" : ""}
                />
            </div>

            {
                !status ?
                    < div className="handleProcess">
                        {
                            payment ?

                                <img src={QRCODE} alt="QRCODE" />
                                :
                                <div id="boxPayment">
                                    <div id="inputs-Wrapper">
                                        <label htmlFor="">Número do Cartão</label>
                                        <Input type="number" placeholder="0000 0000 0000 0000" />
                                    </div>

                                    <div id="inputPayments">
                                        <div id="inputs-Wrapper">
                                            <label htmlFor="">Validade</label>
                                            <Input type="number" placeholder="04/25" />
                                        </div>

                                        <div id="inputs-Wrapper">
                                            <label htmlFor="">CVC</label>
                                            <Input type="number" placeholder="000" />
                                        </div>
                                    </div>
                                    <Button title="Finalizar pagamento" icon={RiFileListLine} />
                                </div>
                        }
                    </div>
                    :
                    <div className="paymentProcess">
                        {
                            status == "Pendente" ?

                                <div className="process">
                                    <RiTimer2Line />
                                    <p>Aguardando pagamento no caixa</p>
                                </div>
                                : null
                        }

                        {
                            status == "Aprovado" ?

                                <div className="process">
                                    <GoVerified />
                                    <p>Pagamento aprovado!</p>
                                </div>
                                : null
                        }

                        {
                            status == "Pedido Entregue" ?

                                <div className="process">
                                    <ImSpoonKnife />
                                    <p>Pedido entregue!</p>
                                </div>
                                : null
                        }

                        {
                            status == "Cancelado" ?

                                <div className="process">
                                    <ImCancelCircle />
                                    <p>Pedido cancelado!</p>
                                </div>
                                : null
                        }

                    </div>
            }
        </Container >
    )
}