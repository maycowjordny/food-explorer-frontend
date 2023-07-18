import { Container, MobileModel, DesktopModel } from "./styles";

import logoImg from "../../assets/logo.png"
import { BsList } from "react-icons/bs"
import { Resize, IsAdm } from "../../utils/index";
import { RiFileListLine } from "react-icons/ri"
import { FiSearch, FiUser, FiX, FiHeart } from "react-icons/fi"
import { RiHistoryFill } from "react-icons/ri"
import { RxExit } from "react-icons/rx";
import { Link } from "react-router-dom";
import { ButtonSvg } from "../buttonSvg"
import { Button } from "../button"
import { Input } from "../Input"
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants"
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { api } from "../../service/api";


export function Header({ handleCallback }) {
    const isMobile = Resize();
    const isAdm = IsAdm()
    const { signOut } = useAuth()
    const [menu, setMenu] = useState(false)
    const [NumberOfDishes, setNumberOfDishes] = useState(0)
    const [search, setSearch] = useState("")
    const [dishes, setDishes] = useState(0)
    const [orders, setOrder] = useState([])
    const orderId = localStorage.getItem("orderId")

    const handleMenu = () => {
        setMenu(!menu)
    }

    useEffect(() => {

        if (handleCallback != null) {
            handleCallback(search)
        }

    }, [search]);

    useEffect(() => {

        async function FetchOrder() {
            const response = await api.get(`/orders/${orderId}`)
            setOrder(response.data)
        }
        FetchOrder()
    }, [orders, orderId])

    useEffect(() => {

        const numberOfDishes = orders.map(order => order.dishes.length)
        setDishes(numberOfDishes)
    }, [orders])


    useEffect(() => {
        if (orders[0]?.status !== "Pendente") {
            setNumberOfDishes(0);
            return;
        }

        const numberOfDishes = orders.map((item) => item.dishes.length).reduce((a, b) => a + b, 0);
        setNumberOfDishes(numberOfDishes);
    }, [orders]);
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
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>


                        <div className="order-button">
                            {
                                isAdm ? <Link to="/dish"><Button title="Novo prato" /></Link>
                                    :
                                    <Link to="/order"> <Button icon={RiFileListLine} title={`Pedido (${NumberOfDishes})`} /> </Link>
                            }
                        </div>

                        <div className="profile">
                            {
                                isAdm ? <Link to="/history">   <ButtonSvg icon={RiHistoryFill} />  </Link>
                                    :
                                    <Link to="/profile">   <ButtonSvg icon={FiUser} />  </Link>

                            }
                        </div>
                        {
                            isAdm ? null :
                                <div className="favorites">
                                    <Link to="/favorites"> <ButtonSvg icon={FiHeart} /></Link>
                                </div>
                        }


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
                            <div className="order">
                                {
                                    isAdm ? null :
                                        <Link to="/order">
                                            <ButtonSvg icon={RiFileListLine} />
                                            <span>{NumberOfDishes}</span>
                                        </Link>
                                }
                            </div>
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
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                        {
                                            isAdm ?
                                                <>
                                                    <Link to="/dish"><ButtonSvg title="Novo Prato" /></Link>
                                                    <div id="line"></div>
                                                    <Link to="/history"><ButtonSvg title="Histórico" /></Link>
                                                    <div id="line"></div>
                                                    <Link to="/"> <ButtonSvg title="Sair" className="buttons-menu" onClick={signOut} /></Link>
                                                    <div id="line"></div>
                                                </>
                                                :
                                                <>
                                                    <Link to="/profile"><ButtonSvg title="Profile" className="buttons-menu" /></Link>
                                                    <div id="line"></div>
                                                    <Link to="/favorites"> <ButtonSvg title="Favoritos" /></Link>
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