
import { Routes, Route } from "react-router-dom";

import { Dish } from '../pages/Dish'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { MyFavorites } from '../pages/MyFavorites'
import { Profile } from "../pages/Profile";
import { MyOrder } from "../pages/MyOrder";
import { OrderHistory } from "../pages/OrderHistory";
import { Payment } from "../pages/Payment";
import { IsAdm } from "../utils/index";

export function AppRoutes() {
    const isAdm = IsAdm();

    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/favorites" element={< MyFavorites />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/history" element={<OrderHistory />} />
            <Route path="/payment" element={<Payment />} />

            <Route path="/dish/:id" element={<Dish />} />
            <Route path="/dish" element={<Dish />} />

            <Route path="/order" element={<MyOrder />} />
            <Route path="/order/:id" element={<MyOrder />} />

            <Route path="/details/:id" element={<Details />} />
        </Routes>
    )
}