import { TagTitleSection } from "../elements/TagTitleSection"
import "../styles/sections/ourprojects.styles.css"
import { fetchGetData } from "../../lib/fetchGetData"
import { useState, useEffect } from "react"

export const OurProjects = () => {
    const [projectsData, setProjectsData] = useState([])

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
                {projectsData.map((project) => (
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

    return (
        <section className="ourprojects-section">
            <TagTitleSection title="Projetos Feitos" />
            <div className="projects-container">
                <RenderProjects />
            </div>
        </section>
    )
}