import "../styles/components/faq.styles.css"
import { useState, useEffect } from "react"
import { fetchGetData } from "../../lib/fetchGetData"

export const FAQ = () => {
    const [freqQuestionsData, setFreqQuestionsData] = useState([])

    useEffect(() => {
        async function fetchData() {
            let data = await fetchGetData("frequentlyQuestions")
            setFreqQuestionsData(data)
        }
        fetchData()
    }, [])

    const RenderQuestions = () => {
        
        const RenderQuestion = (props) => {
            let { question, response } = props
                    
            return (
                <div className="question-box">
                    <p className="question-title">{question}</p>
                    <p className="question-response">{response}</p>
                </div>
            )
        }

        return (
            <>
                {freqQuestionsData.map((freqQuestion) => (
                    <RenderQuestion
                        key={freqQuestion.id}
                        question={freqQuestion.question}
                        response={freqQuestion.response}
                    />
                ))}
            </>
        )
    }

    return (
        <div className="faq-container">
            <h3>Perguntas Frequentes</h3>
            <RenderQuestions />
        </div>
    )
}