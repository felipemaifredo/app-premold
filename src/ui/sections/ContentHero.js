import "../styles/sections/content-hero.styles.css"
import { BtnTogether1 } from "../elements/BtnTogether1"

export const ContentHero = () => {
    return (
        <div className="content-hero">
            <div className="content-hero-card-primary">
                <p className="title-content-hero-card">+10 de anos no mercado de pré-moldados</p>
                <h1>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem</h1>
                <BtnTogether1 />
            </div>
            <div className="container-cards">
                <div className="content-hero-card">
                    <p className="title-content-hero-card">500+</p>
                    <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem</p>
                </div>
                <div className="content-hero-card">
                    <p className="title-content-hero-card">500+</p>
                    <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem</p>
                </div>
            </div>
        </div>
    )
}