import { Link } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5"
import "../../styles/components/adm/homebutton.styles.css"
export function HomeButton() {
    return (
        <Link className="homebutton" to={"/admin/home"}> <IoHomeOutline />Home </Link>
    )
}