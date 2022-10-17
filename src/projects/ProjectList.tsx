import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectFrom";


interface ProjectListProps {
    projects: Project[];
}

interface ProjectListItemProps {
    project: Project;
}



function FruitListItem(props: ProjectListItemProps) {

    const handleEdit = (project: Project) => {
        console.log(project);
    }
    const { project } = props;
    return <div className="cols-sm">
        <ProjectCard project={project} onEdit={handleEdit} />
        <ProjectForm />
    </div>
}

function ProjectList({ projects }: ProjectListProps) {
    const projectsListItems = projects.map(project => <FruitListItem key={project.id} project={project}></FruitListItem>);
    return <div className="row">{projectsListItems}</div>;
}

export default ProjectList;