import { IoArrowBackCircle } from "react-icons/io5"
import "../../styles/components/adm/gobackbtn.styles.css"

export const GoBackButton = () => {
    function handleGoBack() {
        window.history.back()
    }

    return (
        <button className="go-back-btn" onClick={handleGoBack}> <IoArrowBackCircle /> </button>
    )
}