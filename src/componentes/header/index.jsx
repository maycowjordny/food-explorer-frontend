import { Container, MobileModel, DesktopModel } from "./styles";

import logoImg from "../../assets/logo.png"
import { BsList } from "react-icons/bs"
import { Resize, IsAdm, ShowMenu } from "../../utils/index";
import { RiFileListLine } from "react-icons/ri"
import { FiSearch, FiUser } from "react-icons/fi"
import { RxExit } from "react-icons/rx";
import { ButtonSvg } from "../buttonSvg"
import { Button } from "../button"
import { Input } from "../Input"
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants"
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { Menu } from "../../pages/Menu";

export function Header() {
    const isMobile = Resize();
    const isAdm = IsAdm()
    const { signOut } = useAuth()
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }


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
                            {
                                isAdm ? <Button title="Novo prato" />
                                    :
                                    <Button icon={RiFileListLine} title="Pedidos (0)" />
                            }
                        </div>

                        <div className="profile">
                            {
                                isAdm ? null
                                    :
                                    <ButtonSvg icon={FiUser} />

                            }
                        </div>

                        <div className="logout">
                            <ButtonSvg icon={RxExit} onClick={signOut} />
                        </div>

                    </DesktopModel>
                    :
                    <>
                        <MobileModel>

                            <div className="menu">
                                <a>
                                    <ButtonSvg icon={BsList} onClick={handleMenu} />
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
                        {
                            menu ? <Menu /> : null
                        }
                    </>
            }

        </Container >
    )
}