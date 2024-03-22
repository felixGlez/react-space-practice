import { Link } from "react-router-dom"
import { MENU_NAVBAR } from "../../constants/menuNavbar"

const MenuNavbar = () => {
    return(
        <>
        <ul>
            {MENU_NAVBAR.map(menuItem => (
                <li key={menuItem.id}>
                    <Link to={menuItem.path}>{menuItem.section}</Link>
                </li>
            ))}
        </ul>
        </>
    )
}

export default MenuNavbar