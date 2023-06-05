
import { Routes, Route } from "react-router-dom";

import { Dish } from '../pages/Dish'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { IsAdm } from "../utils/index";

export function AppRoutes() {
    const isAdm = IsAdm();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dish/:id" element={<Dish />} />

            <Route path="/dish" element={<Dish />} />


            <Route path="/details/:id" element={<Details />} />
        </Routes>
    )
}