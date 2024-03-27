import { TagTitleSection } from "../elements/TagTitleSection"
import "../styles/sections/ourprojects.styles.css"
import { fetchGetData } from "../../lib/fetchGetData"
import { useState, useEffect } from "react"

export const OurProjects = () => {
    const numberItens = 3
    const [projectsData, setProjectsData] = useState([])
    const [projectsToShow, setProjectsToShow] = useState(numberItens)

    useEffect(() => {
        async function fetchData() {
            let data = await fetchGetData("servicesMade")
            setProjectsData(data)
        }
        fetchData()
    }, [])

    const RenderProjects = () => {
        const RenderProject = (props) => {
            let { name, description, img, location } = props

            return (
                <div className="project-card">
                    <div className="project-preview">
                        <img src={img} alt="Imagem de Projeto" />
                        <div className="project-preview-info">
                            <p className="project-title">{name}</p>
                            <p className="project-location">{location}</p>
                        </div>
                    </div>
                    <div className="project-info">
                        <p className="project-title">{name}</p>
                        <p className="project-location">{location}</p>
                        <p className="project-description">{description}</p>
                    </div>
                </div>
            )
        }

        return (
            <>
                {projectsData.slice(0, projectsToShow).map((project) => (
                    <RenderProject
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        img={project.img}
                        location={project.location}
                    />
                ))}
            </>
        )
    }

    function loadMoreProjects() {
        setProjectsToShow((prevCount) => prevCount + numberItens)
    }

    function showLessProjects() {
        setProjectsToShow(numberItens)
    }

    return (
        <section className="ourprojects-section">
            <TagTitleSection title="Projetos Feitos" />
            <div className="projects-container">
                <RenderProjects />
            </div>
            {projectsToShow < projectsData.length && (
                <button className="button-projects" onClick={loadMoreProjects}>Mostrar Mais</button>
            )}
            {projectsToShow >= projectsData.length && (
                <button className="button-projects" onClick={showLessProjects}>Mostrar Menos</button>
            )}
        </section>
    )
}