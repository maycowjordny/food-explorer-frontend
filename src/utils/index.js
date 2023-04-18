import { useState, useEffect } from "react";


export function Resize() {
    const [isMobile, setIsMobile] = useState([
        window.innerWidth
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setIsMobile(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    })

    return isMobile;

}

export function IsAdm() {
    const [isAdm, setIsAdm] = useState("")


    useEffect(() => {
        setIsAdm(false)
        const role = window.localStorage.getItem("@role")
        setIsAdm(role == "admin")
    })


    return isAdm;
}