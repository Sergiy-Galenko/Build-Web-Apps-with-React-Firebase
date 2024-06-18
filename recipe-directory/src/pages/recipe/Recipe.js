import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import "./Recipe.css";

export default function Recipe() {
    const { id } = useParams();
    const url = '"http://localhost:3000/recipes/' + id;
    const { error, isPending, data: recipes } = useFetch(url);

    return (
        <div className="recipes">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {recipes && (
                <>
                    <h2 className="page-title"></h2>
                    <p>Takes {recipes.cookingTime} to cook.</p>
                    <ul>
                        {recipes.ingridients.map((ing) => (
                            <li key={ing}>{ing}</li>
                        ))}
                    </ul>
                    <p className="method">{recipes.method}</p>
                </>
            )}
        </div>
    );
}
