import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Searchbar.css";

export default function Searchbar() {
    const [term, setTrem] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?q=${term}`);
    };

    return (
        <div className="searchbar">
            <from onSubmit={handleSubmit}>
                <label htmlFor="search">Search</label>
                <input
                    type="text"
                    id="search"
                    onChange={(e) => setTrem(e.target.value)}
                    required
                />
            </from>
        </div>
    );
}
