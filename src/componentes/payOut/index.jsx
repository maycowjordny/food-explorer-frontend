import { Container } from "./styles"
import { Input } from "../Input";
import { FaRegCreditCard, FaQrcode } from "react-icons/fa";
import { useEffect, useState } from "react";
import { RiFileListLine, RiTimer2Line } from "react-icons/ri";
import { ImSpoonKnife, ImCancelCircle } from "react-icons/im";
import PIX from "../../assets/PIX.png";
import QRCODE from "../../assets/QRCODE.png";
import { Button } from "../button";

export function PayOut() {

    const [payment, setPayment] = useState(false);

    const handlePayment = () => {
        setPayment(!payment)
    }

    return (
        <Container>
            <div className="buttons-wrapper">
                <Button title="PIX" id="button-pix" icon={FaQrcode} />
                <Button icon={FaRegCreditCard} title="Crédito" id="button-credit" className="active" />
            </div>
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



        </Container>
    )
}