import { useState } from "react"
import toast from "react-hot-toast"

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState("");

    const handleChange = (e) => setQuery(e.target.value);

    const handleSabmit = (e) => {
        e.preventDefault()
        const searchQuery = query.trim();
        if (!searchQuery) {

            toast.error("Please enter a search term")
            return;
        }
        onSubmit(searchQuery);
        setQuery("");
    }

    return (
        <header>
            <form onSubmit={handleSabmit}>
                <input
                    onChange={handleChange}
                    value={query}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                
                <button type="submit">Search</button>
            </form>
        </header>)
}
export default SearchBar