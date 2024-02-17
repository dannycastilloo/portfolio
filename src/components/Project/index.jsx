import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import ProjectCard from '../ProjectCard'
import projectsData from '../../data/projects'
import ProjectModal from '../ProjectModal'

import './index.scss'

function Project() {

  const projectsPerPage = 6;
  const pageCount = Math.ceil(projectsData.length / projectsPerPage)

  const [currentPage, setCurrentPage] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)

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

  const offset = currentPage * projectsPerPage;

  return (
    <div className='project-content'>
      <div className='project-header'>
        <h2>Projects</h2>
        <div className='project-filters'>
          <button className='project-filter'>Website</button>
          <button className='project-filter'>Mobile</button>
          <button className='project-filter'>Design</button>
        </div>
        <button className='search-project'>
          <img src="./icons/search.svg" alt="Search" />
        </button>
      </div>

      <div className='project-body'>
        {projectsData.slice(offset, offset + projectsPerPage).map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      <div className='project-footer'>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
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