import { Container } from "./styles";
import menu from "../../assets/Menu.png"
import logoImg from "../../assets/logo.png"
import { ButtonSvg } from "../../componentes/buttonSvg"
import { BsList } from "react-icons/bs";
import orderImg from "../../assets/orderSvgMobile.png"
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants"

export function Header() {


    return (
        <Container>


            <ButtonSvg icon={BsList} />

            <div className="logo">
                <img src={logoImg} alt="logo food explorer" />
                <h6>food explorer</h6>
            </div>

            <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.96094 8C5.96094 7.44771 6.40865 7 6.96094 7H19.9609C20.5132 7 20.9609 7.44771 20.9609 8C20.9609 8.55228 20.5132 9 19.9609 9H6.96094C6.40865 9 5.96094 8.55228 5.96094 8Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.96094 12C5.96094 11.4477 6.40865 11 6.96094 11H19.9609C20.5132 11 20.9609 11.4477 20.9609 12C20.9609 12.5523 20.5132 13 19.9609 13H6.96094C6.40865 13 5.96094 12.5523 5.96094 12Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.04672 0.585787C1.4218 0.210714 1.9305 0 2.46094 0H24.4609C24.9914 0 25.5001 0.210714 25.8751 0.585787C26.2502 0.960861 26.4609 1.46957 26.4609 2V21C26.4609 21.3466 26.2815 21.6684 25.9867 21.8506C25.6918 22.0329 25.3237 22.0494 25.0137 21.8944L21.4609 20.118L17.9081 21.8944C17.6266 22.0352 17.2952 22.0352 17.0137 21.8944L13.4609 20.118L9.90815 21.8944C9.62662 22.0352 9.29525 22.0352 9.01372 21.8944L5.46094 20.118L1.90815 21.8944C1.59816 22.0494 1.23002 22.0329 0.935206 21.8506C0.64039 21.6684 0.460938 21.3466 0.460938 21V2C0.460938 1.46957 0.671652 0.960859 1.04672 0.585787ZM24.4609 2L2.46094 2L2.46094 19.382L5.01372 18.1056C5.29525 17.9648 5.62662 17.9648 5.90815 18.1056L9.46094 19.882L13.0137 18.1056C13.2952 17.9648 13.6266 17.9648 13.9081 18.1056L17.4609 19.882L21.0137 18.1056C21.2952 17.9648 21.6266 17.9648 21.9081 18.1056L24.4609 19.382V2Z" fill="white" />
            </svg>

            <span>{0}</span>


        </Container>

    )
}