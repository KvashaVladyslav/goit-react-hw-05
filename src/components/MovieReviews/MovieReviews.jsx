import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmReviews } from "../../api";
import ReviewItem from "../MovieReviewsItem/MovieReviewsItem";

export default function MovieReviews() {
    const { filmId } = useParams();
    const [filmReviews, setFilmReviews] = useState([])

    

    useEffect(() => {
        if (!filmId) return
        async function filmReviews() {
            const getReviews = await getFilmReviews(filmId)
            setFilmReviews(getReviews.results)
        }
        filmReviews()
    }, [filmId])
    
    return (
        <div>{filmReviews.length === 0 && <p>There is not reviews about this film yet</p>}
            <ul><ReviewItem review={filmReviews} /></ul>
        </div>
        
    )
}