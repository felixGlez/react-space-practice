import { Outlet } from "react-router-dom"
import MenuNavbar from "../components/menu-navbar/MenuNavbar"

const Layout = () => {
    return(
        <>
            <MenuNavbar />
            <Outlet />
        </>
    )
}

export default Layout