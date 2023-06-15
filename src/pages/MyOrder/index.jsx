import { Container } from "./styles";
import { PayOut } from "../../componentes/payOut";
import { Button } from "../../componentes/button";
import { Footer } from "../../componentes/footer";
import { NewHeader } from "../../componentes/newHeader";
import { WINDOW_MOBILE_WIDTH, WINDOW_MOBILE_DESCRIPTION } from "../../utils/constants";
import { Order } from "../../componentes/order";
import { Resize } from "../../utils/index";
export function MyOrder() {
    const isMobile = Resize()



    return (
        <Container>
            <NewHeader />
            <main>
                <div className="box-container">
                    <div>
                        <h2>Meu pedido </h2>
                        <div className="scroll">
                            <div className="box-order">
                                <Order data={
                                    {
                                        name: "Salada Ravanello",
                                        price: " 49,97",
                                        quantity: "01",
                                    }

                                } />
                                <Order data={
                                    {
                                        name: "Salada Ravanello",
                                        price: " 49,97",
                                        quantity: "01",
                                    }

                                } />

                                <Order data={
                                    {
                                        name: "Salada Ravanello",
                                        price: " 49,97",
                                        quantity: "01",
                                    }

                                } />

                            </div>
                        </div>
                    </div>
                    <div className="box-payment">
                        {
                            isMobile > WINDOW_MOBILE_WIDTH ?
                                <>
                                    <h2>Pagamento</h2>
                                    <PayOut />
                                </>
                                :
                                null
                        }
                    </div>
                </div>

                <div className="amount">
                    <span>Total: R$ 103,88</span>
                </div>
                {
                    isMobile < WINDOW_MOBILE_WIDTH ?
                        <div className="button-wrapper">
                            <Button title="Avançar" id="button-advance" />
                        </div>
                        :
                        null
                }
            </main>

            <Footer />
        </Container>
    )
}