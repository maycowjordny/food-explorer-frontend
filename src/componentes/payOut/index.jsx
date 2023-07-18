import { Container } from "./styles"
import { Input } from "../Input";
import { FaRegCreditCard, FaQrcode } from "react-icons/fa";
import { useEffect, useState } from "react";
import { RiFileListLine, RiTimer2Line } from "react-icons/ri";
import { ImSpoonKnife, ImCancelCircle } from "react-icons/im";
import { GoVerified } from "react-icons/go";
import QRCODE from "../../assets/QRCODE.png";
import { Button } from "../button";
import { api } from "../../service/api";

export function PayOut() {

    const [orders, setOrder] = useState([])
    const [payment, setPayment] = useState(false)
    const [status, setStatus] = useState(null)
    const [paymentMethod, setPaymentMethod] = useState()
    const [disableButtons, setDisableButtons] = useState(false)

    const [numberCard, setNumberCard] = useState(false)
    const [segurityCode, setSegurityCode] = useState(false)
    const [validate, setValidate] = useState(false)
    const orderId = localStorage.getItem("orderId")

    const handlePayment = () => {
        setPayment(!payment)
    }

    const handlePaymentMethod = (method) => {
        setPaymentMethod(method);
        if (method === "Pix") {
            setTimeout(() => {
                finalizePaymentPix();
            }, 4000);
        }

        api.patch(`/orders/${orderId}/payment`, { payment: method });
    }

    const handleClick = (method) => {
        if (method === paymentMethod) {
            return;
        }
        handlePayment();
        handlePaymentMethod(method);
    };


    useEffect(() => {
        async function fetchOrder() {
            const response = await api.get(`/orders/${orderId}`)
            setOrder(response.data)

            if (response.data[0].payment == "Pix") {
                setPayment(true)
            }
        }
        fetchOrder()
    }, [])

    useEffect(() => {
        const currentStatus = orders.map(order => order.status).toString()
        if (currentStatus !== "Pendente") {
            setStatus(currentStatus)
        }

    }, [orders])

    const hanldeFinalizePayment = () => {
        if (!numberCard) {
            alert("Coloque o número do seu Cartão")
            return
        }

        if (!validate) {
            alert("Coloque o número da validade do seu Cartão")
            return
        }

        if (!segurityCode) {
            alert("Coloque o código de segurança do seu Cartão")
            return
        }

        const newStatus = orders.map(order => order.status).toString()
        setStatus(newStatus)
        localStorage.setItem('@OrderStatus', newStatus)
    }

    const finalizePaymentPix = () => {
        const newStatus = orders.map(order => order.status).toString()
        setStatus(newStatus)
        localStorage.setItem('@OrderStatus', newStatus)
    };

    useEffect(() => {
        if (status === "Pendente" ||
            status === "Aprovado" ||
            status === "Pedido Entregue" ||
            status === "Cancelado") {
            setDisableButtons(true);
        } else {
            setDisableButtons(false);
        }
    }, [status]);
    return (
        <Container>
            <div className="buttons-wrapper">
                <Button
                    title="PIX"
                    id="button-pix"
                    icon={FaQrcode}
                    onClick={() => handleClick("Pix")}
                    className={payment ? "active" : ""}
                    disabled={disableButtons}
                />

                <Button
                    icon={FaRegCreditCard}
                    title="Crédito"
                    id="button-credit"
                    onClick={() => handleClick("Cartão de crédito")}
                    className={!payment ? "active" : ""}
                    disabled={disableButtons}

                />
            </div>

            {
                !status ?
                    <div className="PaymentProcess">
                        {
                            payment ?
                                <img src={QRCODE} alt="qrcode" />
                                :
                                <div id="boxPayment">
                                    <div id="inputs-Wrapper">
                                        <label htmlFor="">Número do Cartão</label>
                                        <Input type="number" placeholder="0000 0000 0000 0000" onChange={e => setNumberCard(e.target.value)} />
                                    </div>

                                    <div id="inputPayments">
                                        <div id="inputs-Wrapper">
                                            <label htmlFor="">Validade</label>
                                            <Input type="number" placeholder="04/25" onChange={e => setValidate(e.target.value)} />
                                        </div>

                                        <div id="inputs-Wrapper">
                                            <label htmlFor="">CVC</label>
                                            <Input type="number" placeholder="000" onChange={e => setSegurityCode(e.target.value)} />
                                        </div>
                                    </div>
                                    <Button title="Finalizar pagamento" icon={RiFileListLine} onClick={() => hanldeFinalizePayment()} />
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