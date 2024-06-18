import "./Search.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../components/RecipeList";

export default function Search() {
    const queryStrng = useLocation().search;
    const queryParms = new URLSearchParams(queryStrng);
    const query = queryParms.get("q");
    const url = "http://localhost:3000/recipes?q=" + query;
    const { error, isPending, data } = useFetch(url);

    return (
        <div>
            <h2 className="page-titele">Recipes includin "{query}"</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    );
}
