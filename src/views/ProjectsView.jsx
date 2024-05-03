import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectFilters from '../components/ProjectFilters'
import projectsData from '../data/projects'

function ProjectsView() {

    const [selectedProject, setSelectedProject] = useState(null)
    const [projectTypeFilter, setProjectTypeFilter] = useState(null)
    const [search, setSearch] = useState('')
    const [activeFilters, setActiveFilters] = useState([])

    const handleProjectClick = (project) => {
        setSelectedProject(project)
    }

    const handleFilterClick = (type) => {
        if (projectTypeFilter === type) {
            handleClearFilter(type);
        } else {
            setProjectTypeFilter(type);
            setActiveFilters([type]);
        }
    };

    const handleClearFilter = (type) => {
        setProjectTypeFilter(null);
        setActiveFilters((prevFilters) => prevFilters.filter((filter) => filter !== type));
    };

    const isFilterActive = (type) => activeFilters.includes(type);

    const filteredProjects = projectTypeFilter
        ? projectsData.filter((project) => project.type === projectTypeFilter)
        : projectsData;

    const searchedProjects = search
        ? filteredProjects.filter((project) =>
            project.title.toLowerCase().includes(search.toLowerCase())
        )
        : filteredProjects;

    return (
        <section className='w-full flex justify-between items-center bg-neutral50 py-16 md:py-20 lg:py-24'>
            <div className='container mx-auto flex flex-col gap-20 w-10/12 lg:w-12/12'>
                <h2 className='text-center font-raleway font-extrabold text-neutral800 text-4xl lg:text-5xl'>Projects</h2>
                <div className='flex flex-col gap-16'>
                    <ProjectFilters
                        activeFilters={activeFilters}
                        handleFilterClick={handleFilterClick}
                        handleClearFilter={handleClearFilter}
                    />
                </div>

                <div className='flex flex-wrap justify-between items-center gap-12 md:justify-between md:gap-20 mt-0 md:mt-4 lg:gap-24'>
                    {searchedProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                            onClick={() => handleProjectClick(project)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsView