import { useParams } from 'react-router-dom'
import { ButtonCenter } from "../../components/adm/ButtonCenter"
import "../../styles/pages/Adm/global.adm.styles.css"
import { useState, useEffect } from "react"
import { fetchGetDatawithID } from '../../../lib/fetchGetDatawithID'
import { fetchUpdateData } from '../../../lib/fetchUpdateData'

export function EditServiceMade() {
    const { id } = useParams()
    const collectionName = "servicesMade"
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        img: "",
        description: "",
        position: ""
    })

    useEffect(() => {
        async function fetchData() {
            let data = await fetchGetDatawithID({
                collectionName: collectionName,
                id: id
            })
            setFormData(data)
        }
        fetchData()
    }, [id])

    function handleInputChange(e) {
        let { name, value } = e.target
        setFormData((prevClass) => ({ ...prevClass, [name]: value }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await fetchUpdateData({
                id: id,
                data: formData,
                collectionName: collectionName
            })
            alert("Atualizado")          
        } catch (error) {
            alert("erro:", error)
        }
    }

    return (
        <>
            <ButtonCenter
                homeBtn={true}
                goBackBtn={true}
            />
            <div className="div-adm-center">
            <form className="form-adm" onSubmit={handleSubmit}>
                    Editar Banner: {id}
                    <img src={formData.img} alt="Imagem" />
                    <input
                        type="text"
                        placeholder="Nome"
                        name="name"
                        onChange={handleInputChange}
                        value={formData.name}
                    />
                    <input
                        type="text"
                        placeholder="Nome"
                        name="location"
                        onChange={handleInputChange}
                        value={formData.location}
                    />
                    <textarea
                        type="text"
                        placeholder="Descrição"
                        name="description"
                        onChange={handleInputChange}
                        value={formData.description}
                    />
                    <div className="box-position">
                        <p>Posição:</p>
                        <input
                            type="number"
                            placeholder="Posição"
                            name="position"
                            onChange={handleInputChange}
                            value={formData.position}
                            min={0}
                        />
                    </div>
                    <button type="submit"> Atualizar </button>
                </form>
            </div>
        </>
    )
}