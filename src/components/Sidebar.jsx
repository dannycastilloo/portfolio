function Sidebar ({ isOpen, onClose }) {

    const handleClose = () => {
        onClose()
    }

    return (
        <aside className={`fixed top-0 right-0 w-1/2 md:w-2/6 h-full bg-white transition-transform duration-300 transform flex flex-col justify-start items-center pt-16 gap-4 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button className="absolute top-4 right-4 p-2 rounded-md bg-neutral100" onClick={handleClose}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#2A2A2A">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Links */}
            <a className="w-11/12 py-4 hover:bg-neutral100 rounded-md text-center" href='#services' onClick={handleClose}>Services</a>
            <a className="w-11/12 py-4 hover:bg-neutral100 rounded-md text-center" href='#projects' onClick={handleClose}>Projects</a>
            <a className="w-11/12 py-4 hover:bg-neutral100 rounded-md text-center" href='#partners' onClick={handleClose}>Partners</a>
            <a className="w-11/12 py-4 hover:bg-neutral100 rounded-md text-center" href='#testimonials' onClick={handleClose}>Testimonials</a>
        </aside>
    )
}

export default Sidebar