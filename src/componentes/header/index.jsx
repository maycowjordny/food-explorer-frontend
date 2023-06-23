import { Container, MobileModel, DesktopModel } from "./styles";

import logoImg from "../../assets/logo.png"
import { BsList } from "react-icons/bs"
import { Resize, IsAdm, ShowMenu } from "../../utils/index";
import { RiFileListLine } from "react-icons/ri"
import { FiSearch, FiUser, FiX } from "react-icons/fi"
import { RxExit } from "react-icons/rx";
import { Link } from "react-router-dom";
import { ButtonSvg } from "../buttonSvg"
import { Button } from "../button"
import { Input } from "../Input"
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants"
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

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
                                <Link to="/">
                                    <div className="logo">
                                        <div>
                                            <img src={logoImg} alt="logo food explorer" />
                                            <h6>food explorer</h6>
                                        </div>
                                        <div>
                                            <p>admin</p>
                                        </div>
                                    </div>
                                </Link>
                                :
                                <Link to="/">
                                    <div className="logo">
                                        <div>
                                            <img src={logoImg} alt="logo food explorer" />
                                            <h6>food explorer</h6>
                                        </div>
                                    </div>
                                </Link>
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
                                    <Link to="/order"> <Button icon={RiFileListLine} title="Pedidos (0)" /> </Link>
                            }
                        </div>

                        <div className="profile">
                            {
                                isAdm ? null
                                    :
                                    <Link to="/profile">   <ButtonSvg icon={FiUser} />  </Link>

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

                                    <Link to="/">

                                        <div className="logo">
                                            <div>
                                                <img src={logoImg} alt="logo food explorer" />
                                                <h6>food explorer</h6>
                                            </div>
                                            <div>
                                                <p>admin</p>
                                            </div>
                                        </div>
                                    </Link>
                                    :
                                    <Link to="/">
                                        <div className="logo">
                                            <div>
                                                <img src={logoImg} alt="logo food explorer" />
                                                <h6>food explorer</h6>
                                            </div>
                                        </div>
                                    </Link>
                            }
                            <Link to="/order">
                                <div className="order">
                                    <a>
                                        <ButtonSvg icon={RiFileListLine} />
                                        <span>{0}</span>
                                    </a>
                                </div>
                            </Link>

                        </MobileModel>
                        {
                            menu ?
                                <div className="show-menu">
                                    <header>
                                        <ButtonSvg icon={FiX} title="Menu" id="button-menu" onClick={handleMenu} />
                                    </header>
                                    <div className="box-menu">
                                        <Input
                                            icon={FiSearch}
                                            placeholder="Busque por pratos ou ingredientes"
                                        />
                                        {
                                            isAdm ?
                                                <>
                                                    <Link to="/dish"><ButtonSvg title="Novo Prato" /></Link>
                                                    <div id="line"></div>
                                                    <Link to="/history"><ButtonSvg title="Histórico" /></Link>
                                                    <div id="line"></div>
                                                </>
                                                :
                                                <>
                                                    <Link to="/profile"><ButtonSvg title="Profile" className="buttons-menu" /></Link>
                                                    <div id="line"></div>
                                                    <Link to="/history"> <ButtonSvg title="Histórico de pedidos" className="buttons-menu" /></Link>
                                                    <div id="line"></div>
                                                    <Link to="/"> <ButtonSvg title="Sair" className="buttons-menu" onClick={signOut} /></Link>
                                                    <div id="line"></div>
                                                </>
                                        }
                                    </div>

                                </div>
                                : null
                        }
                    </>
            }

        </Container >
    )
}