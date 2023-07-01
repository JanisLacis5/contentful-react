import {useFetchProjets} from "./fetchProjects"

const Projects = () => {
    const {projects} = useFetchProjets()
    return (
        <section className="projects">
            <div className="title">
                <h2>Projects</h2>
                <div className="title-underline"></div>
            </div>
            <div className="projects-center">
                {projects.map((item) => {
                    console.log(item)
                    const {id, img, title, url} = item
                    return (
                        <a
                            key={id}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="project">
                            <img className="img" src={img} alt={title} />
                            <h3>{title}</h3>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}
export default Projects
