import { Link } from "react-router-dom"
import { ButtonCenter } from "../../components/adm/ButtonCenter"
import { fetchGetData } from "../../../lib/fetchGetData"
import { fetchDeleteData } from "../../../lib/fetchDeleteData"
import { useState, useEffect } from "react"
import { FaPen } from "react-icons/fa"
import { FaTrash } from "react-icons/fa"
import "../../styles/pages/Adm/global.adm.styles.css"

export function ServicesMade() {
    const [servicesMadeData, setServicesMadeData] = useState([])

    useEffect(() => {
        async function fetchData() {
            let data = await fetchGetData("servicesMade")
            setServicesMadeData(data)
        }
        fetchData()
    }, [])

    function RenderServices() {
        
        const RenderService = (props) => {
            let { name, description, id, img, location, position } = props

            return (
                <div className="services-box">
                    <img src={img}  alt="Imagem"/>
                    <p>{position}</p>
                    <p>{name}</p>
                    <p>{location}</p>
                    <p>{description}</p>
                    <div className="btns-box">
                        <Link to={`/admin/servicos-feitos/editar/${id}`}> 
                            <FaPen />
                        </Link>
                        <button onClick={() => handleDeleteData({
                            collectionName: "servicesMade",
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
                {servicesMadeData.map((service) => (
                    <RenderService
                        key={service.id}
                        id={service.id}
                        name={service.name}
                        description={service.description}
                        img={service.img}
                        location={service.location}
                        position={service.position}
                    />
                ))}
            </>
        )
    }

    function handleDeleteData(props) {
        let response = window.confirm("Tem certeza de que deseja excluir este serviço?")
        if (response) {
            try {
                fetchDeleteData(props)
            } catch (error) {
                alert("Erro:", error)
                return
            }
            setServicesMadeData(servicesMadeData.filter(serviceMade => serviceMade.id !== props.id))
            alert("Serviço Excluido")
        }
    }

    return (
        <>
            <ButtonCenter
                homeBtn={true}
            />
            <div className="div-adm">
                <Link className="link-add" to={"/admin/servicos-feitos/add"}>
                    Adicionar Serviço
                </Link>
                <div className="container-itens">
                    <RenderServices />
                </div>
            </div>
        </>
    )
}