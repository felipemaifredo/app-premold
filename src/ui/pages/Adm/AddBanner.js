import { ButtonCenter } from "../../components/adm/ButtonCenter"
import "../../styles/pages/Adm/global.adm.styles.css"

export function AddBanner() {
    return (
        <>
            <ButtonCenter
                homeBtn={true}
                goBackBtn={true}
            />
            <div className="div-adm">
                Page
            </div>
        </>
    )
}