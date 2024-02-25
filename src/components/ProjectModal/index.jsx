import { Modal } from 'react-responsive-modal'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import './index.scss'

function ProjectModal({ isOpen, onClose, project }) {

    if (!project) { return null }

    const { title, description, screenshots, technologies } = project;

    const images = screenshots.map((screenshot, index) => ({
        original: screenshot
    }));

    return (
        <Modal open={isOpen} onClose={onClose} center classNames={{ modal: 'project-modal' }}>
            <div className='modal-content'>
                <div className='modal-info'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="screenshot-carousel">
                    <ImageGallery
                        items={images}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showBullets={true}
                        showThumbnails={false}
                    />
                </div>
                <div className='project-technologies'>
                    {technologies.map((tech, index) => (
                        <img key={index} src={tech} alt={`Tech ${index + 1}`} title={`Tech ${index + 1}`} />
                    ))}
                </div>
            </div>
        </Modal>
    )
}

export default ProjectModal