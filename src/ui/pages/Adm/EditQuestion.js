import { useParams } from 'react-router-dom'
import { ButtonCenter } from "../../components/adm/ButtonCenter"

export function EditQuestion() {
    const { id } = useParams()
    return (
        <>
            <ButtonCenter
                homeBtn={true}
            />
           <p> Edit {id}</p>
        </>
    )
}