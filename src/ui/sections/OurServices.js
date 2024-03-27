import { TagTitleSection } from "../elements/TagTitleSection"
import "../styles/sections/ourservices.styles.css"
import project from "../assets/project.webp"
import { useRef, useState } from "react"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const ServicesData = [
    {
        title: "Projetos",
        description: "Projetos realizados de forma enxuta e direta para uma melhor disposiçáo do imóver e sistemas. Realizamos projetos Arquitetônicos, Estruturais, Elétricos, Hidráulicos, Incêndio e executivos.",
        link: "/google.com",
        img: project
    }, {
        title: "Projetos",
        description: "Projetos realizados de forma enxuta e direta para uma melhor disposiçáo do imóver e sistemas. Realizamos projetos Arquitetônicos, Estruturais, Elétricos, Hidráulicos, Incêndio e executivos.",
        link: "/google.com",
        img: project
    }, {
        title: "Projetos",
        description: "Projetos realizados de forma enxuta e direta para uma melhor disposiçáo do imóver e sistemas. Realizamos projetos Arquitetônicos, Estruturais, Elétricos, Hidráulicos, Incêndio e executivos.",
        link: "/google.com",
        img: project
    }, {
        title: "Projetos",
        description: "Projetos realizados de forma enxuta e direta para uma melhor disposiçáo do imóver e sistemas. Realizamos projetos Arquitetônicos, Estruturais, Elétricos, Hidráulicos, Incêndio e executivos.",
        link: "/google.com",
        img: project
    }, {
        title: "Projetos",
        description: "Projetos realizados de forma enxuta e direta para uma melhor disposiçáo do imóver e sistemas. Realizamos projetos Arquitetônicos, Estruturais, Elétricos, Hidráulicos, Incêndio e executivos.",
        link: "/google.com",
        img: project
    } , {
        title: "Projetos",
        description: "Projetos realizados de forma enxuta e direta para uma melhor disposiçáo do imóver e sistemas. Realizamos projetos Arquitetônicos, Estruturais, Elétricos, Hidráulicos, Incêndio e executivos.",
        link: "/google.com",
        img: project
    }  , {
        title: "Projetos",
        description: "Projetos realizados de forma enxuta e direta para uma melhor disposiçáo do imóver e sistemas. Realizamos projetos Arquitetônicos, Estruturais, Elétricos, Hidráulicos, Incêndio e executivos.",
        link: "/google.com",
        img: project
    } , {
        title: "Projetos",
        description: "Projetos realizados de forma enxuta e direta para uma melhor disposiçáo do imóver e sistemas. Realizamos projetos Arquitetônicos, Estruturais, Elétricos, Hidráulicos, Incêndio e executivos.",
        link: "/google.com",
        img: project
    }
]

export const OurServices = () => {
    const containerRef = useRef(null)
    const [containerWidth, setContainerWidth] = useState(0)

    function handleContainerResize() {
        const containerDimensions = containerRef.current.getBoundingClientRect()
        setContainerWidth(containerDimensions.width)
    }

    function handleNextClick() {
        containerRef.current.scrollLeft += containerWidth / 2
    }

    function handlePrevClick() {
        containerRef.current.scrollLeft -= containerWidth / 2
    }

    const RenderServices = () => {
        const RenderService = (props) => {
            let { title, description, img, link } = props
            return (
                <div className="service-box">
                    <img src={img} alt="Imagem de Projeto" />
                    <p className="title-service">{title}</p>
                    <span></span>
                    <p className="descrip-service">{description}</p>
                    <a href={link}>Saiba Mais</a>
                </div>
            )
        }

        return (
            ServicesData.map((service) => (
                <RenderService
                    key={service.title}
                    title={service.title}
                    description={service.description}
                    link={service.link}
                    img={service.img}
                />
            ))
        )
    }

    return (
        <section id="our-services" className="section-ourserives">
            <TagTitleSection title="Nossos Serviços" />
            <div className="our-services">
                    <button className='Navigation-btn Navigation-btn-left' onClick={handlePrevClick}>
                        <FaArrowLeft />
                    </button>
                    <button className='Navigation-btn Navigation-btn-right' onClick={handleNextClick}>
                        <FaArrowRight />
                    </button>
                <div
                    className="container-services"
                    ref={containerRef}
                    onLoad={handleContainerResize}
                    onResize={handleContainerResize}
                >
                    <RenderServices />
                </div>
            </div>
        </section>
    )
}