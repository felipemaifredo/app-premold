import { ButtonCenter } from "../../components/adm/ButtonCenter"
import "../../styles/pages/Adm/global.adm.styles.css"
import { fetchAddData } from "../../../lib/fetchAddData"
import { fetchUpdateWithID } from "../../../lib/fetchUpdateWithID"
import { fetchUploadFile } from "../../../lib/fetchUploadFile"
import { LoaginScreen } from "../../components/adm/LoadingScreen"
import { useState } from "react"

const initalStateFormData = {
    name: "",
    description: "",
    location: "",
    position: "1",
}

export function AddServicesMade() {
    const [loadScreen, setLoadScreen] = useState(false)
    const [formData, setFormData] = useState(initalStateFormData)
    const [image, setImage] = useState(null)

    function handleImagemSelecionada(e) {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0])
        } else {
            setImage(null)
        }
    }

    function handleInputChange(e) {
        let { name, value } = e.target
        setFormData((prevClass) => ({ ...prevClass, [name]: value }))
    }

    function dataValidator() {
        if (formData.name && formData.description && formData.position && image) {
            return true
        }
        return false
    }

    async function handleSubmit(e) {
        e.preventDefault()
        let validateData = dataValidator()
        setLoadScreen(true)

        if (validateData) {
            try {
                let docRef = await fetchAddData({ 
                    collectionName: "servicesMade", newData: formData 
                })
                let updateID = fetchUpdateWithID(docRef)
                let uploadedImage
                if (image) {
                    uploadedImage = await fetchUploadFile({ 
                        docRef: docRef, image: image 
                    })
                }
                if (docRef && updateID && uploadedImage) {
                    setLoadScreen(false)
                    alert("Cadastrado com Sucesso")
                    resetInputs()
                }
            } catch (error) {
                setLoadScreen(false)
                alert("Erro ao Cadastrar", error)
            }
        } else {
            setLoadScreen(false)
            alert("Confira os campos")
        }
    }

    function resetInputs() {
        setFormData(initalStateFormData)
        setImage(null)
    }

    return (
        <>
            <ButtonCenter
                homeBtn={true}
                goBackBtn={true}
            />
            <div className="div-adm-center">
                <form className="form-adm" onSubmit={handleSubmit}>
                    <p>Adicionar Serviço</p>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="name"
                        onChange={handleInputChange}
                        value={formData.name}
                    />
                    <input
                        type="text"
                        placeholder="Localização"
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
                    <label>
                        <p> {image ? "Imagem Anexada" : "Imagem não anexada"} </p>
                        <input type="file" onChange={handleImagemSelecionada} />
                    </label>
                    <button type="submit"> Adicionar </button>
                </form>
            </div>
            {loadScreen && <LoaginScreen />}
        </>
    )
}