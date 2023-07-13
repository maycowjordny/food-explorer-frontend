import { Container, TableDeskTop, TableMobile } from "./styles";
import { NewHeader } from "../../componentes/newHeader";
import { Footer } from "../../componentes/footer"
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants"
import { Resize, IsAdm } from "../../utils/index";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../service/api";

export function OrderHistory() {

    const isMobile = Resize();
    const isAdm = IsAdm()

    const [orders, setOrder] = useState([])

    useEffect(() => {
        async function FetchOrderById() {
            const orderId = localStorage.getItem("orderId")
            const response = await api.get(`/orders/${orderId}`)
            setOrder(response.data)
        }
        FetchOrderById()
    }, [])
    return (
        <Container>
            <NewHeader />
            {
                isMobile < WINDOW_MOBILE_WIDTH ?

                    <main>
                        {
                            isAdm ?
                                <>
                                    <h1>Pedidos</h1>
                                    <TableMobile>
                                        <div className="table-heade">
                                            <div>000004</div>
                                            <div>🟡 Pendente</div>
                                            <div>20/05 às 18h00</div>
                                        </div>
                                        <div className="table-body">
                                            <span>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</span>
                                        </div>
                                        <div className="box-select">
                                            <select>
                                                <option value="Pendente">🟡 Pendente</option>
                                                <option value="Aprovado">🟠 Aprovado</option>
                                                <option value="Pedido Entregue">🟢 Pedido Entregue</option>
                                                <option value="Cancelado">🔴 Cancelado</option>
                                            </select>
                                        </div>
                                    </TableMobile>

                                </>
                                :
                                <>
                                    <h1>Pedidos</h1>

                                    {
                                        orders.map(order => (
                                            < TableMobile key={order.id} >
                                                {

                                                    <div className="table-heade">
                                                        <div>{order.id.toString().padStart(6, "0")}</div>
                                                        <div>{order.status}</div>
                                                        <div>{new Date(order.created_at).toLocaleDateString('pt-BR')} às {new Date(order.created_at).toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: 'numeric', minute: 'numeric' })}</div>
                                                    </div>
                                                }
                                                <div className="table-body">
                                                    <span>
                                                        {order.dishes.map(dish => (`${dish.quantity} x ${dish.name}`)).join(", ")}
                                                    </span>
                                                </div>
                                            </TableMobile>
                                        ))
                                    }
                                </>
                        }
                    </main>
                    :
                    <main>
                        {
                            isAdm ?
                                <TableDeskTop>
                                    <h1>Histórico de pedidos</h1>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Status</th>
                                                <th>Código </th>
                                                <th>Detalhamento </th>
                                                <th>Data e hora</th>
                                            </tr>

                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>
                                                    <select>
                                                        <option value="Pendente">🟡 Pendente</option>
                                                        <option value="Aprovado">🟠 Aprovado</option>
                                                        <option value="Pedido Entregue">🟢 Pedido Entregue</option>
                                                        <option value="Cancelado">🔴 Cancelado</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <span>00000004</span>
                                                </td>
                                                <td>
                                                    <span>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</span>
                                                </td>
                                                <td>
                                                    <span>20/05 às 18h00</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </TableDeskTop>
                                :

                                <>
                                    {
                                        orders.map(order => (


                                            <TableDeskTop>
                                                <h1>Histórico de pedidos</h1>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Status</th>
                                                            <th>Código </th>
                                                            <th>Detalhamento </th>
                                                            <th>Data e hora</th>
                                                        </tr>

                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <h6>{order.status}</h6>
                                                            </td>
                                                            <td>
                                                                <span>{order.id.toString().padStart("6", 0)}</span>
                                                            </td>
                                                            <td>
                                                                <span>{order.dishes.map(dish => (`${dish.quantity} x ${dish.name}`)).join(", ")}</span>
                                                            </td>
                                                            <td>
                                                                <span>{new Date(order.created_at).toLocaleDateString('pt-BR')} às
                                                                    {new Date(order.created_at).toLocaleTimeString('pt-BR',
                                                                        { timeZone: 'America/Sao_Paulo', hour: 'numeric', minute: 'numeric' })}
                                                                </span>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </TableDeskTop>
                                        ))
                                    }
                                </>
                        }
                    </main>
            }

            <Footer />
        </Container >
    )
}