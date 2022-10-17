import { useState } from "react";
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
    const [projectBeingEdited, setProjectBeingEdited] = useState({});
    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project);
    }

    const cancelEditing = () => {
        setProjectBeingEdited({});
    }
    const { project } = props;
    return <div className="cols-sm">
        {project === projectBeingEdited ?
            (<ProjectForm onCancel={cancelEditing} />)
            :
            (<ProjectCard project={project} onEdit={handleEdit}></ProjectCard>)
        }
    </div>
}

function ProjectList({ projects }: ProjectListProps) {


    const projectsListItems = projects.map(project => <FruitListItem key={project.id} project={project}></FruitListItem>);
    return <div className="row">{projectsListItems}</div>;
}

export default ProjectList;