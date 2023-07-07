import { Container } from "./styles";
import { Header } from "../../componentes/header";
import { Footer } from "../../componentes/footer"
import { CardDetails } from "../../componentes/cardDetails";
import { ButtonSvg } from "../../componentes/buttonSvg";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { api } from "../../service/api";
import { Link, useParams } from "react-router-dom";

export function Details({ data, ...rest }) {

    const [dishes, setdishes] = useState([])
    const { id } = useParams()

    useEffect(() => {
        async function FetchDishes() {
            const response = await api.get(`dishes/${id}`)
            setdishes(response.data)

        }
        FetchDishes()
    }, [])

    return (
        <Container {...rest}>
            <Header />
            <Link to="/">
                <div id="button-back">
                    <ButtonSvg icon={RiArrowLeftSLine} title="voltar" />
                </div>
            </Link>
            <main>
                <CardDetails data={dishes} />
            </main>
            <Footer />
        </Container>
    )
}