import "../../styles/components/adm/buttoncenter.adm.styles.css"
import { LogoutButton } from "./LogoutButton"
import { HomeButton } from "./HomeButton"
import { GoBackButton } from "./GoBackButton"

export const ButtonCenter = (props) => {
    const { homeBtn, logoutBtn, goBackBtn } = props

    return (
        <div className="button-center"> 
            { goBackBtn && <GoBackButton /> }
            { homeBtn && <HomeButton /> }
            { logoutBtn && <LogoutButton /> }
        </div>
    )
}