import { Container } from "./styles";
import { Header } from "../../componentes/header"
import { useRef } from "react";
import { BannerHome } from "../../componentes/bannerHome";
import { Footer } from "../../componentes/footer";
import { Card } from "../../componentes/card";
import { ButtonSvg } from "../../componentes/buttonSvg";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
export function Home() {

    const carousel = useRef([])

    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth

    }

    return (
        <Container>
            <Header />
            <main>
                <BannerHome />
                <section>
                    <h1>Refeições</h1>
                    <div className="btn-carousel">
                        <ButtonSvg icon={AiOutlineLeft} id="arrow-left" onClick={e => handleLeftClick(e)} />

                        <div className="carousel" ref={carousel}>


                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01"
                                }

                            }
                                className="card" />


                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01"
                                }

                            }
                                className="card" />


                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01"
                                }

                            }
                                className="card" />



                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01"
                                }

                            }
                                className="card" />



                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01"
                                }

                            }
                                className="card" />



                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01"
                                }

                            }
                                className="card" />



                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01"
                                }

                            }
                                className="card" />



                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01"
                                }

                            }
                                className="card" />



                        </div>
                        <ButtonSvg icon={AiOutlineRight} id="arrow-right" onClick={e => handleRightClick(e)} />
                    </div>

                </section>
            </main>
            <Footer />
        </Container >
    )
}