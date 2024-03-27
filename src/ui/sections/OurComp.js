import { TagTitleSection } from "../elements/TagTitleSection"
import "../styles/sections/ourtecnology.styles.css"
import img from "../assets/img.png"
import { FaCheckCircle } from "react-icons/fa";

export const OurComp = () => {
    return (
        <section id="our-comp" className="our-tecnology-section">
            <TagTitleSection title="Nossa Equipe" />
            <div className="content-tecnology our-comp">
                <div className="tec-img-box">
                    <img src={img} alt="Imagem sobre tecnologia" />
                </div>
                <div className="tec-content-box">
                    <div className="tec-content">
                        <span>
                            <FaCheckCircle />
                        </span>
                        <div className="tec-content-texts">
                            <p className="tec-content-texts-title">Atendimento personalizado</p>
                            <p className="tec-content-texts-descrip">Tecnologia em Concreto Tecnologia em Concreto Tecnologia em Concreto</p>
                        </div>
                    </div>
                    <div className="tec-content">
                        <span>
                            <FaCheckCircle />
                        </span>
                        <div className="tec-content-texts">
                            <p className="tec-content-texts-title">Segurança e Qualidade</p>
                            <p className="tec-content-texts-descrip">Tecnologia em Concreto Tecnologia em Concreto Tecnologia em Concreto</p>
                        </div>
                    </div>
                    <div className="tec-content">
                        <span>
                            <FaCheckCircle />
                        </span>
                        <div className="tec-content-texts">
                            <p className="tec-content-texts-title">Prazo confortável</p>
                            <p className="tec-content-texts-descrip">Tecnologia em Concreto Tecnologia em Concreto Tecnologia em Concreto</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}