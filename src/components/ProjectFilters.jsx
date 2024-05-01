function ProjectFilters({ activeFilters, handleFilterClick, handleClearFilter }) {
    const filters = [
        { type: 'Ecommerce', label: 'Ecommerce' },
        { type: 'Landing', label: 'Landing' },
        { type: 'Data', label: 'Data' },
        { type: 'Entertainment', label: 'Entertainment' },
        { type: 'Clone', label: 'Clone' }
    ];

    return (
        <div className='flex justify-center items-center flex-wrap gap-5 md:gap-10'>
            {filters.map((filter) => (
                <button
                    key={filter.type}
                    onClick={() => handleFilterClick(filter.type)}
                    className={`flex justify-center gap-2 project-filter text-neutral600 hover:text-neutral700 ${activeFilters.includes(filter.type) ? 'active text-neutral800 px-3 py-1 rounded' : ''}`}
                >
                    {filter.label}
                    {activeFilters.includes(filter.type) && (
                        <span className="clear-filter" onClick={() => handleClearFilter(filter.type)}>x</span>
                    )}
                </button>
            ))}
        </div>
    );
}

export default ProjectFilters;