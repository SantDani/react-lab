import { Project } from "./Project";
import ProjectCard from "./ProjectCard";


interface ProjectListProps {
    projects: Project[];
}

interface ProjectListItemProps {
    project: Project;
}



function FruitListItem(props: ProjectListItemProps) {

    const { project } = props;
    return <div className="cols-sm">
        <ProjectCard project={project} />
    </div>
}

function ProjectList({ projects }: ProjectListProps) {
    const projectsListItems = projects.map(project => <FruitListItem key={project.id} project={project}></FruitListItem>);
    return <div className="row">{projectsListItems}</div>;
}

export default ProjectList;