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
    const [categories, setCategories] = useState([])
    const [categoriesResponse, setCategoriesResponse] = useState([]);

    const handleLeftClick = () => {
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = () => {
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


    useEffect(() => {
        async function FetchCategory() {
            const response = await api.get(`/categories`);
            setCategories(response.data)
            console.log(response.data);
        }

        FetchCategory()
    }, [])

    useEffect(() => {
        if (categoriesResponse.length > 0 && dishes.length > 0) {

            const newCategories = categoriesResponse.filter(category => {
                return dishes.some(dish => dish.category_id == category.id)
            })

            setCategories(newCategories)
        }
    }, [dishes]);

    return (
        <Container>
            <Header handleCallback={handleCallback} />
            <main>
                <BannerHome />
                {
                    categories.map(category => (

                        <section key={category.id}>
                            <h1>{category.name}</h1>
                            <div className="btn-carousel">
                                <ButtonSvg icon={AiOutlineLeft} id="arrow-left" onClick={handleLeftClick} />

                                <div id="carousel" ref={carousel}>
                                    {
                                        dishes.map(dish => (
                                            dish.category_id == category.id ?
                                                < Card
                                                    key={dish.id}
                                                    data={dish} /> : null
                                        ))
                                    }

                                </div>
                                <ButtonSvg icon={AiOutlineRight} id="arrow-right" onClick={handleRightClick} />
                            </div>

                        </section>

                    ))
                }
            </main>
            <Footer />
        </Container >
    )
}