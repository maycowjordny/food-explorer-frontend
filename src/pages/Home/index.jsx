import { Container } from "./styles";
import { Header } from "../../componentes/header"
import { useRef } from "react";
import { BannerHome } from "../../componentes/bannerHome";
import { Footer } from "../../componentes/footer";
import { Card } from "../../componentes/card";
import { ButtonSvg } from "../../componentes/buttonSvg";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
export function Home() {

    const carousel = useRef(null)

    const handleLeftClick = (e) => {

        console.log(e)

        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (e) => {

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
                        <ButtonSvg icon={AiOutlineLeft} id="arrow-left" onClick={handleLeftClick} />

                        <div id="carousel" ref={carousel}>


                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01",
                                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                                }

                            }
                            />


                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01",
                                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                                }

                            }
                            />


                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01",
                                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                                }

                            }
                            />



                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01",
                                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                                }

                            }
                            />



                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01",
                                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"

                                }

                            }
                            />



                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01",
                                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                                }

                            }
                            />



                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01",
                                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"

                                }

                            }
                            />

                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01",
                                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"

                                }

                            }
                            />

                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01",
                                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"

                                }

                            }
                            />

                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01",
                                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"

                                }

                            }
                            />

                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01",
                                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"

                                }

                            }
                            />

                            <Card data={
                                {
                                    name: "Salada Ravanello >",
                                    price: " 49,97",
                                    quantity: "01",
                                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"

                                }

                            }
                            />



                        </div>
                        <ButtonSvg icon={AiOutlineRight} id="arrow-right" onClick={handleRightClick} />
                    </div>

                </section>
            </main>
            <Footer />
        </Container >
    )
}