function ProjectFilters({ activeFilters, handleFilterClick, handleClearFilter }) {
    const filters = [
        { type: 'Ecommerce', label: 'Ecommerce' },
        { type: 'Landing Page', label: 'Landing Page' },
        { type: 'Portfolio', label: 'Portfolio' },
        { type: 'Streaming', label: 'Streaming' },
        { type: 'Learning', label: 'Learning' },
        { type: 'Entertainment', label: 'Entertainment' },
        { type: 'Clone', label: 'Clone' }
    ];

    return (
        <div className='flex justify-center items-center flex-wrap gap-6 lg:gap-10'>
            {filters.map((filter) => (
                <button
                    key={filter.type}
                    onClick={() => handleFilterClick(filter.type)}
                    className={`flex justify-center gap-2 project-filter text-gray1 hover:text-white ${activeFilters.includes(filter.type) ? 'active text-white px-3 py-1 rounded' : ''}`}
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