import { Outlet } from "react-router-dom";
import FooterHome from "./footer-home/footer-home";
import HeaderHome from "./header-home/header-home";


export default function LayoutMain() {
    return (
        <>
            <HeaderHome />
            <Outlet />
            <FooterHome />
        </>
    )
}