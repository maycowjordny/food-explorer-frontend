
import { Routes, Route } from "react-router-dom";

import { Dish } from '../pages/Dish'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { MyFavorites } from '../pages/MyFavorites'
import { OrderHistory } from "../pages/OrderHistory";
import { IsAdm } from "../utils/index";

export function AppRoutes() {
    const isAdm = IsAdm();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dish/:id" element={<Dish />} />
            <Route path="/favorites" element={< MyFavorites />} />
            <Route path="/dish" element={<Dish />} />

            <Route path="/history" element={<OrderHistory />} />
            <Route path="/details" element={<Details />} />
        </Routes>
    )
}