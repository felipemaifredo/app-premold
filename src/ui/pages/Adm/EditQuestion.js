import { useParams } from 'react-router-dom'
import { ButtonCenter } from "../../components/adm/ButtonCenter"
import "../../styles/pages/Adm/global.adm.styles.css"
import { useState, useEffect } from "react"
import { fetchGetDatawithID } from '../../../lib/fetchGetDatawithID'
import { fetchUpdateData } from '../../../lib/fetchUpdateData'

export function EditQuestion() {
    const { id } = useParams()
    const collectionName = "frequentlyQuestions"
    const [formData, setFormData] = useState({
        question: "",
        response: "",
        position: ""
    })

    function handleInputChange(e) {
        let { name, value } = e.target
        setFormData((prevClass) => ({ ...prevClass, [name]: value }))
    }

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
                    Editar: {id}
                    <input
                        type="text"
                        placeholder="Pergunta"
                        name="question"
                        onChange={handleInputChange}
                        value={formData.question}
                    />
                    <textarea
                        type="text"
                        placeholder="Resposta"
                        name="response"
                        onChange={handleInputChange}
                        value={formData.response}
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