import { Container } from "./styles"
import { FaRegCreditCard, FaQrcode } from "react-icons/fa";
import { RiFileListLine, RiTimer2Line } from "react-icons/ri";
import { ImSpoonKnife, ImCancelCircle } from "react-icons/im";
import PIX from "../../assets/PIX.png";
import QRCODE from "../../assets/QRCODE.png";
import { Button } from "../button";

export function PayOut() {
    return (
        <Container>
            <div className="buttons-wrapper">
                <Button title="PIX" id="button-pix" icon={FaQrcode} />
                <Button icon={FaRegCreditCard} title="Crédito" id="button-credit" />
            </div>
            <img src={QRCODE} alt="QRCODE" />
        </Container>
    )
}