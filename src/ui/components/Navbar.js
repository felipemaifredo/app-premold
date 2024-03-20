import logoPremold from "../assets/premold-logo.png"
import "../styles/components/navbar.styles.css"

export const Navbar = () => {
    return (
        <nav>
            <div>
                <a href="https://google.com" width={200}>
                    <img src={logoPremold} alt="Logo Premold" height={60} />
                </a>
                <ul>
                    <li> <a href="#services"> Serviços </a> </li>
                    <li> <a href="#projects"> Projetos </a> </li>
                    <li> <a href="#contact"> Contato </a> </li>
                </ul>
                <a className="nav-link" href="#contact">Solicitar Orçamento</a>
            </div>
        </nav>
    )
}