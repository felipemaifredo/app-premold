import { ButtonCenter } from "../../components/adm/ButtonCenter"
import "../../styles/pages/Adm/global.adm.styles.css"
import { useState } from "react"
import { fetchAddData } from "../../../lib/fetchAddData"
import { fetchUpdateWithID } from "../../../lib/fetchUpdateWithID"
import { fetchUploadFile } from "../../../lib/fetchUploadFile"
import { LoaginScreen } from "../../components/adm/LoadingScreen"

const initalStateFormData = {
    name: "",
    link: "",
    position: "1",
}

export function AddBanner() {
    const [image, setImage] = useState(null)
    const [loadScreen, setLoadScreen] = useState(false)
    const [formData, setFormData] = useState(initalStateFormData)

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
        if (formData.name && formData.link && formData.position && image) {
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
                    collectionName: "banners", newData: formData 
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
                    alert("Banner Cadastrado com Sucesso")
                    resetInputs()
                }
            } catch (error) {
                setLoadScreen(false)
                alert("Erro ao Cadastrar Banner", error)
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
                    <p>Adicionar Banner</p>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="name"
                        onChange={handleInputChange}
                        value={formData.name}
                    />
                    <input
                        type="text"
                        placeholder="Link"
                        name="link"
                        onChange={handleInputChange}
                        value={formData.link}
                    />
                    <input
                        type="number"
                        placeholder="Posição"
                        name="position"
                        onChange={handleInputChange}
                        value={formData.position}
                        min={0}
                    />
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