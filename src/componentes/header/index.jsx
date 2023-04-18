import { Container, MobileModel, DesktopModel } from "./styles";

import logoImg from "../../assets/logo.png"
import { BsList } from "react-icons/bs"
import { Resize, IsAdm } from "../../utils/index";
import { RiFileListLine, RiCloseLine, RiUserLine } from "react-icons/ri"
import { FiSearch, FiUser } from "react-icons/fi"
import { RxExit } from "react-icons/rx";
import { ButtonSvg } from "../buttonSvg"
import { Button } from "../button"
import { Input } from "../Input"
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants"

export function Header() {
    const isMobile = Resize();
    const isAdm = IsAdm()
    return (
        <Container>

            {
                isMobile > WINDOW_MOBILE_WIDTH ?

                    <DesktopModel>
                        {
                            isAdm ?

                                <div className="logo">
                                    <div>
                                        <img src={logoImg} alt="logo food explorer" />
                                        <h6>food explorer</h6>
                                    </div>
                                    <div>
                                        <p>admin</p>

                                    </div>
                                </div>
                                :
                                <div className="logo">
                                    <div>
                                        <img src={logoImg} alt="logo food explorer" />
                                        <h6>food explorer</h6>
                                    </div>
                                </div>
                        }

                        <div className="search">
                            <Input
                                icon={FiSearch}
                                placeholder="Busque por pratos ou ingredientes"
                            />
                        </div>


                        <div className="order-button">
                            <Button icon={RiFileListLine} title="Pedidos (0)" />
                        </div>

                        <div className="profile">
                            <ButtonSvg icon={FiUser} />
                        </div>

                        <div className="logout">
                            <ButtonSvg icon={RxExit} />
                        </div>

                    </DesktopModel>
                    :
                    <MobileModel>

                        <div className="menu">
                            <a>
                                <ButtonSvg icon={BsList} />
                            </a>
                        </div>

                        <div className="logo">
                            <img src={logoImg} alt="logo food explorer" />
                            <h6>food explorer</h6>
                        </div>

                        <div className="order">
                            <a>
                                <ButtonSvg icon={RiFileListLine} />
                                <span>{0}</span>
                            </a>
                        </div>

                    </MobileModel>

            }
        </Container >
    )
}