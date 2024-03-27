import { TagTitleSection } from "../elements/TagTitleSection"
import "../styles/sections/ourtecnology.styles.css"
import img from "../assets/img.png"
import { FaCheckCircle } from "react-icons/fa";

export const OurTecnology = () => {
    return (
        <section id="our-tecnology" className="our-tecnology-section">
            <TagTitleSection title="Nossa Tecnologia" />
            <div className="content-tecnology">
                <div className="tec-img-box">
                    <img src={img} alt="Imagem sobre tecnologia" />
                </div>
                <div className="tec-content-box">
                    <div className="tec-content">
                        <span>
                            <FaCheckCircle />
                        </span>
                        <div className="tec-content-texts">
                            <p className="tec-content-texts-title">Tecnologia em Concreto</p>
                            <p className="tec-content-texts-descrip">Tecnologia em Concreto Tecnologia em Concreto Tecnologia em Concreto</p>
                        </div>
                    </div>
                    <div className="tec-content">
                        <span>
                            <FaCheckCircle />
                        </span>
                        <div className="tec-content-texts">
                            <p className="tec-content-texts-title">Tecnologia em Concreto</p>
                            <p className="tec-content-texts-descrip">Tecnologia em Concreto Tecnologia em Concreto Tecnologia em Concreto</p>
                        </div>
                    </div>
                    <div className="tec-content">
                        <span>
                            <FaCheckCircle />
                        </span>
                        <div className="tec-content-texts">
                            <p className="tec-content-texts-title">Tecnologia em Concreto</p>
                            <p className="tec-content-texts-descrip">Tecnologia em Concreto Tecnologia em Concreto Tecnologia em Concreto</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}