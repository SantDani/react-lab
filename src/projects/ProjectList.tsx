import { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectFrom";


interface ProjectListProps {
    projects: Project[];
    onSave: (project: Project) => void;
}

interface ProjectListItemProps {
    project: Project;
    onSave: (project: Project) => void;
}



function FruitListItem({ project, onSave }: ProjectListItemProps) {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});
    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project);
    }

    const cancelEditing = () => {
        setProjectBeingEdited({});
    }

    console.log('onSave ProjectListItemProps');


    return <div className="cols-sm">
        {project === projectBeingEdited ?
            (<ProjectForm onCancel={cancelEditing} onSave={onSave} />)
            :
            (<ProjectCard project={project} onEdit={handleEdit}></ProjectCard>)
        }
    </div>
}

function ProjectList({ projects, onSave }: ProjectListProps) {
    console.log('onSave ProjectListProps');
    const projectsListItems = projects.map(project => <FruitListItem key={project.id} project={project} onSave={onSave}></FruitListItem>);
    return <div className="row">{projectsListItems}</div>;
}

export default ProjectList;