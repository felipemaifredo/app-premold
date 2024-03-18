import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchGetData } from "../../../lib/fetchGetData"
import { fetchDeleteData } from "../../../lib/fetchDeleteData"
import { ButtonCenter } from "../../components/adm/ButtonCenter"
import { FaPen } from "react-icons/fa"
import { FaTrash } from "react-icons/fa"
import "../../styles/pages/Adm/global.adm.styles.css"

export function Banners() {
    const [bannersData, setBannersData] = useState([])

    useEffect(() => {
        async function fetchData() {
            let data = await fetchGetData("banners")
            setBannersData(data)
        }
        fetchData()
    }, [])

    function handleDeleteData(props) {
        let response = window.confirm("Tem certeza de que deseja excluir este banner?")
        if (response) {
            try {
                fetchDeleteData(props)
            } catch (error) {
                alert("Erro:", error)
                return
            }
            setBannersData(bannersData.filter(banner => banner.id !== props.id))
            alert("Banner Excluido")
        }
    }

    const RenderBanners = () => {
        const RenderBanner = (props) => {
            let { img, link, name, position, id } = props
            return (
                <div className="banner-box">
                    <img src={img} alt={name} />
                    <div className="data-box">
                        <p>{position}</p>
                        <p>{name}</p>
                        <a href={link}> {link} </a>
                    </div>
                    <div className="btns-box">
                        <Link to={`/admin/banners/editar/${id}`}> 
                            <FaPen />
                        </Link>
                        <button onClick={() => handleDeleteData({
                            collectionName: "banners",
                            id: id,
                            imgLink: img
                        })}> 
                            <FaTrash />
                        </button>
                    </div>
                </div>
            )
        }

        return (
            <>
                {bannersData.map((banner) => (
                    <RenderBanner
                        id={banner.id}
                        key={banner.id}
                        name={banner.name}
                        link={banner.link}
                        img={banner.img}
                        position={banner.position}
                    />
                ))}
            </>
        )
    }

    return (
        <>
            <ButtonCenter
                homeBtn={true}
            />
            <div className="div-adm">
                <Link className="link-add" to={"/admin/banners/add"}> Adicionar Banner </Link>
                <div className="container-itens">
                    <RenderBanners />
                </div>
            </div>
        </>
    )
}