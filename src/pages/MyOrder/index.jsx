import { Container } from "./styles";
import { Footer } from "../../componentes/footer"
import { NewHeader } from "../../componentes/newHeader"
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";
import { Order } from "../../componentes/order";
import { Resize } from "../../utils/index";
export function MyOrder() {
    const isMobile = Resize()

    return (
        <Container>
            <NewHeader />
            <main>
                <div className="box-order">
                    <h2>Meu pedido </h2>
                    <Order data={
                        {
                            name: "Salada Ravanello",
                            price: " 49,97",
                            quantity: "01",
                        }

                    } />
                </div>
            </main>
            <Footer />
        </Container>
    )
}