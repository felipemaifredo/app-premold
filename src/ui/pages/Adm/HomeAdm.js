import { ButtonCenter } from "../../components/adm/ButtonCenter"
import "../../styles/pages/Adm/homeadm.styles.css"
import { Link } from 'react-router-dom';
import { CiImageOn } from "react-icons/ci";
import { GiFinishLine } from "react-icons/gi";
import { CiSquareQuestion } from "react-icons/ci";

export function HomeAdm() {
    return (
        <>
            <ButtonCenter 
                logoutBtn={true}
            />
            <div className="home-adm">
                <Link to={"/admin/banners"}> <CiImageOn /> Banners </Link>
                <Link to={"/admin/servicos-feitos"}> <GiFinishLine /> Serviços Feitos </Link>
                <Link to={"/admin/perguntas-frequentes"}> <CiSquareQuestion /> Perguntas Frequentes </Link>
            </div>
        </>
    )
}