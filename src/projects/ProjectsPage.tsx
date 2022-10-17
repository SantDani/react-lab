
import { MOCK_PROJECTS } from './MockPorjects';
import { Project } from './Project';
import ProjectList from './ProjectList';



function ProjectsPage() {
    const saveProject = (project: Project) => {
        console.log('Saving project: ', project);
    }
    console.log('ProjectsPage ');

    return <>
        <h1>Projects </h1>
        <ProjectList projects={MOCK_PROJECTS} onSave={saveProject} />
    </>;
}

export default ProjectsPage;