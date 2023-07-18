import { Container } from "./styles";
import { PayOut } from "../../componentes/payOut";
import { Button } from "../../componentes/button";
import { Footer } from "../../componentes/footer";
import { NewHeader } from "../../componentes/newHeader";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";
import { Order } from "../../componentes/order";
import { Resize } from "../../utils/index";
import { api } from "../../service/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function MyOrder() {
    const isMobile = Resize()
    const [orders, setOrders] = useState([]);
    const total = orders.map(order => order.dishes.length)

    useEffect(() => {
        async function FecthOrders() {
            const orderId = localStorage.getItem("orderId")
            const response = await api.get(`/orders/${orderId}`)
            setOrders(response.data)
        }
        FecthOrders()
    }, [orders])

    return (
        <Container>
            <NewHeader />
            <main>
                <div>
                    <h2>Meu pedido </h2>
                    <div className="scroll">
                        <div className="box-order">
                            {
                                orders.map(order => (
                                    <Order
                                        key={order.id}
                                        data={order}
                                    />
                                ))
                            }
                        </div>
                    </div>

                    {
                        total != 0 ?
                            <div className="amount">
                                {
                                    orders.map(order => (
                                        <span key={order.id}>Total: R$ {order.amount.toFixed(2)}</span>
                                    ))
                                }

                            </div>
                            :
                            null
                    }
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

                {
                    isMobile < WINDOW_MOBILE_WIDTH ?
                        <div className="button-wrapper">
                            {
                                total != 0 ?
                                    <Link to="/payment"><Button title="Avançar" id="button-advance" /></Link>
                                    :
                                    null
                            }
                        </div>
                        :
                        null
                }

            </main>
            <Footer />
        </Container>
    )
}