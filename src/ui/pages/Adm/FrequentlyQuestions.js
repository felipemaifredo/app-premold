import { Link } from "react-router-dom"
import { ButtonCenter } from "../../components/adm/ButtonCenter"
import "../../styles/pages/Adm/global.adm.styles.css"

export function FrequentlyQuestions(){
    return (
        <>
            <ButtonCenter 
                homeBtn={true}
            /> 
             <div className="div-adm">
                <Link className="link-add" to={"/admin/perguntas-frequentes/add"}> Adicionar Pergunta </Link>
                <div>

                </div>
            </div>
        </>
    )
}