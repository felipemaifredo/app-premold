import { Link } from "react-router-dom"
import { ButtonCenter } from "../../components/adm/ButtonCenter"
import "../../styles/pages/Adm/global.adm.styles.css"
import { useState, useEffect } from "react"
import { fetchGetData } from "../../../lib/fetchGetData"
import { fetchDeleteData } from "../../../lib/fetchDeleteData"
import { FaPen } from "react-icons/fa"
import { FaTrash } from "react-icons/fa"

export function FrequentlyQuestions() {
    const [freqQuestionsData, setFreqQuestionsData] = useState([])

    useEffect(() => {
        async function fetchData() {
            let data = await fetchGetData("frequentlyQuestions")
            setFreqQuestionsData(data)
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
            setFreqQuestionsData(freqQuestionsData.filter(freqQuestion => freqQuestion.id !== props.id))
            alert("Pergunta Excluída")
        }
    }

    const RenderFreqQuestions = () => {
        const RenderFreqQuestion = (props) => {
            let { question, response, id } = props

            return (
                <div className="faq-box">
                    <p>{question}</p>
                    <p>{response}</p>
                    <div className="btns-box">
                        <Link to={`/admin/perguntas-frequentes/editar/${id}`}> 
                            <FaPen />
                        </Link>
                        <button onClick={() => handleDeleteData({
                            collectionName: "frequentlyQuestions",
                            id: id,
                        })}> 
                            <FaTrash />
                        </button>
                    </div>
                </div>
            )
        }

        return (
            <>
                {freqQuestionsData.map((freqQuestion) => (
                    <RenderFreqQuestion
                        key={freqQuestion.id}
                        id={freqQuestion.id}
                        question={freqQuestion.question}
                        response={freqQuestion.response}
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
                <Link className="link-add" to={"/admin/perguntas-frequentes/add"}> Adicionar Pergunta </Link>
                <div className="container-itens">
                    <RenderFreqQuestions />
                </div>
            </div>
        </>
    )
}