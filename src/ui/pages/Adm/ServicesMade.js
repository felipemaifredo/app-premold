import { Link } from "react-router-dom"
import { ButtonCenter } from "../../components/adm/ButtonCenter"
import "../../styles/pages/Adm/global.adm.styles.css"

export function ServicesMade(){
    return (
        <>
            <ButtonCenter 
                homeBtn={true}
            /> 
             <div className="div-adm">
                <Link className="link-add" to={"/admin/servicos-feitos/add"}> Adicionar Serviço </Link>
                <div>

                </div>
            </div>
        </>
    )
}