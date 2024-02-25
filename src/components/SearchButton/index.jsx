import { useState } from 'react'
import './index.scss'

const SearchButton = ({ setSearch }) => {
    const [mostrarInput, setMostrarInput] = useState(false)

    const toggleInput = () => {
        setMostrarInput(!mostrarInput)
    }

    const handleInputClick = (e) => {
        e.stopPropagation()
    }

    return (
        <form onClick={toggleInput} className={`search-button ${mostrarInput ? 'expanded' : ''}`}>
            {mostrarInput && (
                <input
                    type="text"
                    placeholder="Search"
                    onClick={handleInputClick}
                    onChange={(e) => setSearch(e.target.value)}
                />
            )}
            <img src='./icons/search.svg' alt="Search" title='Find the best projects' />
        </form>
    );
};

export default SearchButton