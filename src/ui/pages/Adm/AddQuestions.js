import { ButtonCenter } from "../../components/adm/ButtonCenter"
import "../../styles/pages/Adm/global.adm.styles.css"
import { useState } from "react"
import { LoaginScreen } from "../../components/adm/LoadingScreen"
import { fetchAddData } from "../../../lib/fetchAddData"
import { fetchUpdateWithID } from "../../../lib/fetchUpdateWithID"

const initalStateFormData = {
    position: "1",
    question: "",
    response: "",
}

export function AddQuestions() {
    const [formData, setFormData] = useState(initalStateFormData)
    const [loadScreen, setLoadScreen] = useState(false)

    function handleInputChange(e) {
        let { name, value } = e.target
        setFormData((prevClass) => ({ ...prevClass, [name]: value }))
    }

    function dataValidator() {
        if (formData.question && formData.response ) {
            return true
        }
        return false
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setLoadScreen(true)
        let validateData = dataValidator()
        if (validateData) {
            try {
                let docRef = await fetchAddData({ 
                    collectionName: "frequentlyQuestions", newData: formData 
                })
                let updateID = fetchUpdateWithID(docRef)
                if (docRef && updateID) {
                    setLoadScreen(false)
                    alert("Pergunta Cadastrada com Sucesso")
                    resetInputs()
                }
            } catch (error) {
                setLoadScreen(false)
                alert("Erro:", error)
            }
        } else {
            setLoadScreen(false)
            alert("Confira os campos")
        }
    }

    function resetInputs() {
        setFormData(initalStateFormData)
    }

    return (
        <>
            <ButtonCenter
                homeBtn={true}
                goBackBtn={true}
            />
            <div className="div-adm-center">
                <form onSubmit={handleSubmit} className="form-adm">
                    <p>Adicionar Pergunta</p>
                    <input
                        type="text"
                        placeholder="Pergunta"
                        name="question"
                        onChange={handleInputChange}
                        value={formData.name}
                    />
                    <input
                        type="text"
                        placeholder="Resposta"
                        name="response"
                        onChange={handleInputChange}
                        value={formData.link}
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
                    <button type="submit"> Adicionar </button>
                </form>
            </div>
            {loadScreen && <LoaginScreen />}
        </>
    )
}