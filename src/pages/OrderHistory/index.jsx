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
    const [ordersAdm, setOrdersAdm] = useState([]);
    useEffect(() => {
        async function FetchOrder() {
            const response = await api.get(`/orders`)
            setOrder(response.data)
        }
        FetchOrder()
    }, [])

    useEffect(() => {
        async function fetchOrdersAdm() {
            const response = await api.get(`/users`)
            setOrdersAdm(response.data)
        }

        if (isAdm) {
            fetchOrdersAdm();
        }

    }, [isAdm]);

    function GetIconStatus(status) {
        switch (status) {
            case "Pendente":
                return '🟡'
            case "Aprovado":
                return '🟠'
            case "Pedido Entregue":
                return '🟢'
            case "Cancelado":
                return '🔴'
        }

    }

    async function updateStatus(orderId, newStatus) {
        const updateOrdersAdm = ordersAdm.map(orderAdm => {
            if (orderAdm.id === orderId) {
                return { ...orderAdm, status: newStatus }
            } else {
                return orderAdm
            }
        })

        setOrdersAdm(updateOrdersAdm)

        await api.patch(`orders/${orderId}`, { status: newStatus })


        alert("Status atualizado com sucesso!")
    }

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
                                    {
                                        ordersAdm.map(orderAdm => (
                                            <TableMobile key={orderAdm.id}>
                                                <div className="table-heade">
                                                    <div>{orderAdm.id.toString().padStart(6, "0")}</div>
                                                    <div>{GetIconStatus(orderAdm.status)}{orderAdm.status}</div>
                                                    <div>{new Date(orderAdm.created_at).toLocaleDateString('pt-BR')}
                                                        às {new Date(orderAdm.created_at).toLocaleTimeString('pt-BR',
                                                            { timeZone: 'America/Sao_Paulo', hour: 'numeric', minute: 'numeric' })}</div>
                                                </div>
                                                <div className="table-body">
                                                    <span> {orderAdm.dishes.map(dish => (`${dish.quantity} x ${dish.name}`)).join(", ")}</span>
                                                </div>
                                                <div className="box-select">
                                                    <select value={orderAdm.status} onChange={e => updateStatus(orderAdm.id, e.target.value)}>
                                                        <option value="Pendente">🟡 Pendente</option>
                                                        <option value="Aprovado">🟠 Aprovado</option>
                                                        <option value="Pedido Entregue">🟢 Pedido Entregue</option>
                                                        <option value="Cancelado">🔴 Cancelado</option>
                                                    </select>
                                                </div>
                                            </TableMobile>

                                        ))
                                    }
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
                                                        <div>{GetIconStatus(order.status)}{order.status}</div>
                                                        <div>{new Date(order.created_at).toLocaleDateString('pt-BR')}
                                                            às {new Date(order.created_at).toLocaleTimeString('pt-BR',
                                                                { timeZone: 'America/Sao_Paulo', hour: 'numeric', minute: 'numeric' })}</div>
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
                                <>
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
                                                {
                                                    ordersAdm.map(orderAdm => (
                                                        <tr key={orderAdm.id}>
                                                            <td>
                                                                <select value={orderAdm.status} onChange={e => updateStatus(orderAdm.id, e.target.value)} >
                                                                    <option value="Pendente">🟡 Pendente</option>
                                                                    <option value="Aprovado">🟠 Aprovado</option>
                                                                    <option value="Pedido Entregue">🟢 Pedido Entregue</option>
                                                                    <option value="Cancelado">🔴 Cancelado</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <span>{orderAdm.id.toString().padStart(6, "0")}</span>
                                                            </td>
                                                            <td>
                                                                <span>{orderAdm.dishes.map(dish => (`${dish.quantity} x ${dish.name}`)).join(", ")}</span>
                                                            </td>
                                                            <td>
                                                                <span>{new Date(orderAdm.created_at).toLocaleDateString('pt-BR')}
                                                                    às {new Date(orderAdm.created_at).toLocaleTimeString('pt-BR',
                                                                        { timeZone: 'America/Sao_Paulo', hour: 'numeric', minute: 'numeric' })}</span>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </TableDeskTop>
                                </>
                                :
                                <>
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
                                                {
                                                    orders.map(order => (
                                                        <tr key={order.id}>
                                                            <td>
                                                                <h6>{GetIconStatus(order.status)}{order.status}</h6>
                                                            </td>
                                                            <td>
                                                                <span>{order.id.toString().padStart("6", 0)}</span>
                                                            </td>
                                                            <td>
                                                                <span>{order.dishes.map(dish => (`${dish.quantity} x ${dish.name}`)).join(", ")}</span>
                                                            </td>
                                                            <td>
                                                                <span>{new Date(order.created_at).toLocaleDateString('pt-BR')} às {new Date(order.created_at).toLocaleTimeString('pt-BR',
                                                                    { timeZone: 'America/Sao_Paulo', hour: 'numeric', minute: 'numeric' })}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </TableDeskTop>
                                </>
                        }
                    </main>
            }

            <Footer />
        </Container >
    )
}