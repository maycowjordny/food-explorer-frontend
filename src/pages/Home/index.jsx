import { Container } from "./styles";
import { Header } from "../../componentes/header"
import { useRef } from "react";
import { BannerHome } from "../../componentes/bannerHome";
import { Footer } from "../../componentes/footer";
import { Card } from "../../componentes/card";
import { ButtonSvg } from "../../componentes/buttonSvg";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useState, useEffect } from "react";
import { api } from "../../service/api";
export function Home() {

    const carousel = useRef(null)
    const [search, setSearch] = useState("")
    const [dishes, setDishes] = useState([])

    const handleLeftClick = (e) => {
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (e) => {
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    const handleCallback = search => {
        setSearch(search)
    }

    useEffect(() => {
        async function FetchDishes() {
            const response = await api.get(`/dishes?name=${search}`);
            setDishes(response.data)
        }

        FetchDishes()
    }, [search])


    return (
        <Container>
            <Header handleCallback={handleCallback} />
            <main>
                <BannerHome />
                <section>
                    <h1>Refeições</h1>
                    <div className="btn-carousel">
                        <ButtonSvg icon={AiOutlineLeft} id="arrow-left" onClick={handleLeftClick} />

                        <div id="carousel" ref={carousel}>
                            {
                                dishes.map(dish => (
                                    < Card
                                        key={dish.id}
                                        data={dish} />
                                ))
                            }

                        </div>
                        <ButtonSvg icon={AiOutlineRight} id="arrow-right" onClick={handleRightClick} />
                    </div>

                </section>
            </main>
            <Footer />
        </Container >
    )
}