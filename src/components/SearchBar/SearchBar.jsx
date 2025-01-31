import { useState } from "react"
import toast from "react-hot-toast"
import s from "./SearchBar.module.css"


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
        <header >
            <form  className={s.form} onSubmit={handleSabmit}>
                <input className={s.input}
                    onChange={handleChange}
                    value={query}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                
                <button className={s.btn} type="submit">Search</button>
            </form>
        </header>)
}
export default SearchBar