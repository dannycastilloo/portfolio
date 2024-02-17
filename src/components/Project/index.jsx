import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import ProjectCard from '../ProjectCard'
import projectsData from '../../data/projects'
import ProjectModal from '../ProjectModal'

import './index.scss'
import SearchButton from '../SearchButton'

function Project() {

  const projectsPerPage = 6

  const [currentPage, setCurrentPage] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const [projectTypeFilter, setProjectTypeFilter] = useState(null)
  const [activeFilter, setActiveFilter] = useState(null)
  const [search, setSearch] = useState('')
  const [activeFilters, setActiveFilters] = useState([])

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
    setSelectedProject(null)
  }

  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  const handleFilterClick = (type) => {
    if (projectTypeFilter === type) {
      handleClearFilter(type);
    } else {
      setProjectTypeFilter(type);
      setCurrentPage(0);
      setActiveFilters([type]);
    }
  };

  const handleClearFilter = (type) => {
    setProjectTypeFilter(null);
    setActiveFilters((prevFilters) => prevFilters.filter((filter) => filter !== type));
    setCurrentPage(0);
  };

  const isFilterActive = (type) => activeFilters.includes(type);

  const pageCount = Math.ceil(projectsData.length / projectsPerPage)

  const getPaginatedProjects = () => {
    const filteredProjects = projectsData.filter((project) => {
      const title = project.title || '';
      const typeMatch = !projectTypeFilter || project.type === projectTypeFilter;
      const searchMatch = search === '' || title.includes(search);

      return typeMatch && searchMatch;
    });

    const startIndex = currentPage * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const paginatedData = filteredProjects.slice(startIndex, endIndex);

    return paginatedData;
  };

  return (
    <div className='project-content'>
      <div className='project-header'>
        <h2>Projects</h2>
        <div className='project-filters'>
          <button
            onClick={() => handleFilterClick('Website')}
            className={`project-filter ${isFilterActive('Website') ? 'active' : ''}`}
            style={{
              backgroundColor: isFilterActive('Website') ? '#3A3A3A' : 'initial',
              color: isFilterActive('Website') ? '#FFFFFF' : 'initial'
            }}
          >
            Website
            {isFilterActive('Website') && (
              <span className="clear-filter" onClick={() => handleClearFilter('Website')}>
                x
              </span>
            )}
          </button>
          <button
            onClick={() => handleFilterClick('Mobile')}
            className={`project-filter ${projectTypeFilter === 'Mobile' ? 'active' : ''}`}
            style={{ backgroundColor: projectTypeFilter === 'Mobile' ? '#3A3A3A' : 'initial', color: projectTypeFilter === 'Mobile' ? '#FFFFFF' : 'initial' }}
          >
            Mobile
            {projectTypeFilter === 'Mobile' && (
              <span className="clear-filter" onClick={() => handleClearFilter('Mobile')}>
                x
              </span>
            )}
          </button>
          <button
            onClick={() => handleFilterClick('Design')}
            className={`project-filter ${projectTypeFilter === 'Design' ? 'active' : ''}`}
            style={{ backgroundColor: projectTypeFilter === 'Design' ? '#3A3A3A' : 'initial', color: projectTypeFilter === 'Design' ? '#FFFFFF' : 'initial' }}
          >
            Design
            {projectTypeFilter === 'Design' && (
              <span className="clear-filter" onClick={() => handleClearFilter('Design')}>
                x
              </span>
            )}
          </button>
        </div>
        <SearchButton setSearch={(value) => setSearch(value)} />
      </div>

      <div className='project-body'>
        {getPaginatedProjects().map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      <div className='project-footer'>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}

    </div>
  )
}

export default Project