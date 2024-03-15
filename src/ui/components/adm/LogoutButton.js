import { signOut } from "firebase/auth"
import { FiLogOut } from "react-icons/fi"
import { auth } from "../../../lib/FirebaseConfig"
import { useNavigate } from 'react-router-dom'
import "../../styles/components/adm/logoutbutton.styles.css"

export function LogoutButton() {
    const navigate = useNavigate()

    function handleLogout() {
        signOut(auth).then(() => {
            navigate('/admin/login')
        })
    }

    return (
        <button className="logout-button" onClick={handleLogout} >
            <FiLogOut />
            Logout
        </button>
    )
}