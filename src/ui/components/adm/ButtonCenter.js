import "../../styles/components/adm/buttoncenter.adm.styles.css"
import { LogoutButton } from "./LogoutButton"
import { HomeButton } from "./HomeButton"

export function ButtonCenter(props) {
    const { homeBtn, logoutBtn } = props

    return (
        <div className="button-center"> 
            { homeBtn && <HomeButton /> }
            { logoutBtn && <LogoutButton /> }
        </div>
    )
}