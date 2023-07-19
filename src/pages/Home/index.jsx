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

    const carousel = useRef([])
    const [search, setSearch] = useState("")
    const [dishes, setDishes] = useState([])
    const [categories, setCategories] = useState([])
    const [categoriesResponse, setCategoriesResponse] = useState([]);

    const handleLeftClick = (e, index) => {
        e.preventDefault()
        carousel.current[index].scrollLeft -= carousel.current[index].offsetWidth
    }

    const handleRightClick = (e, index) => {
        e.preventDefault()
        carousel.current[index].scrollLeft += carousel.current[index].offsetWidth
    }

    const handleCallback = search => {
        setSearch(search)
    }

    useEffect(() => {
        async function FetchDishes() {
            const response = await api.get(`/dishes?name=${search}&ingredients=${search}`);
            setDishes(response.data)
        }

        FetchDishes()
    }, [search, setCategoriesResponse])


    useEffect(() => {
        async function FetchCategory() {
            const response = await api.get(`/categories`);
            setCategoriesResponse(response.data)

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
                    categories.map((category, index) => (

                        <section key={category.id}>
                            <h1>{category.name}</h1>
                            <div className="btn-carousel">
                                <ButtonSvg icon={AiOutlineLeft} id="arrow-left" onClick={(e) => handleLeftClick(e, index)} />

                                <div className="carousel" id={category.id} ref={ref => { carousel.current.push(ref) }} >
                                    {
                                        dishes.map(dish => (
                                            dish.category_id == category.id ?
                                                < Card
                                                    key={dish.id}
                                                    data={dish} /> : null
                                        ))
                                    }

                                </div>
                                <ButtonSvg icon={AiOutlineRight} id="arrow-right" onClick={(e) => handleRightClick(e, index)} />
                            </div>

                        </section>

                    ))
                }
            </main>
            <Footer />
        </Container >
    )
}