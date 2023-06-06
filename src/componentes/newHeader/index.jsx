import { Container, DesktopModel, MobileModel } from "./styles";

import logoImg from "../../assets/logo.png"
import { Resize, IsAdm } from "../../utils/index";
import { BsList } from "react-icons/bs"
import { RiFileListLine } from "react-icons/ri"
import { FiSearch } from "react-icons/fi"
import { RxExit } from "react-icons/rx";
import { ButtonSvg } from "../buttonSvg"
import { Button } from "../button"
import { Input } from "../Input"
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants"

export function NewHeader() {
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

                        <ButtonSvg title="Meus favoritos" className="buttons-header" />
                        {
                            isAdm ?
                                <ButtonSvg title="Novo prato" className="buttons-header" />
                                :
                                <ButtonSvg title="Histórico de pedidos" className="buttons-header" />
                        }

                        <div className="order-button">
                            <Button icon={RiFileListLine} title="Pedidos (0)" />
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