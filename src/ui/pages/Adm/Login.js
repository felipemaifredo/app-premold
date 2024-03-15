import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { auth } from "../../../lib/FirebaseConfig"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "../../styles/pages/Adm/login.styles.css"
import logoPremold from "../../assets/premold-logo-2.png"

export function Login({ handleLoggin }) {
    const navigate = useNavigate()
    document.title = "Premold | Login"
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
    const [dataLogin, setDataLogin] = useState({
        email: "",
        password: ""
    })

    function handleSignIn(e) {
        e.preventDefault()
        if (emailIsValid(dataLogin.email) && passwordIsValid(dataLogin.password)) {
            signInWithEmailAndPassword(dataLogin.email, dataLogin.password).then((user) => {
                if (user) {
                    handleLoggin()
                    navigate("/admin/home")
                } else {
                    alert("Login falhou. Verifique suas credenciais.")
                }
            })
        } else {
            alert("Confira dos dados inseridos")
        }
    }

    // Função de validação de e-mail
    function emailIsValid(email) {
        return true
    }

    function passwordIsValid(password) {
        return true
    }

    return (
        <div className="login-div">
            <form onSubmit={handleSignIn}>
                <img src={logoPremold} width={200} alt="Logo Premold" />
                <input
                    placeholder="Email"
                    type="email" 
                    value={dataLogin.email} 
                    onChange={(e) => setDataLogin((prevState) => ({ ...prevState, email: e.target.value }))} 
                />
                <input
                    placeholder="Senha"
                    type="password"
                    value={dataLogin.password} 
                    onChange={(e) => setDataLogin((prevState) => ({ ...prevState, password: e.target.value }))} 
                />
                <button type="submit"> Login </button>
            </form>
        </div>
    )
}