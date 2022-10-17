import { Project } from "./Project";

function formatDescription(description: string) {
    return description.substring(0, 60) + '...';
}

interface ProjectCardProps {
    project: Project;
}


function handleClick(projectBeingEdited: Project) {

    console.log(projectBeingEdited);
}
function ProjectCard(props: ProjectCardProps) {
    const { project } = props;
    return (
        <div className="card">
            <img src={project.imageUrl} alt={project.name} />
            <section className="section dark">
                <h5 className="strong"> <strong>{project.name}</strong></h5>
                <p>{formatDescription(project.description)}</p>
                <p>{project.budget.toLocaleString()} M €</p>
            </section>
            <button className="bordered" onClick={() => { handleClick(project) }}>
                <span className="icon-edit"></span>
                Edit
            </button>
        </div>
    );

}

export default ProjectCard;