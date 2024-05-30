import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmReviews } from "../../api";
import ReviewItems from "../MovieReviewsItem/MovieReviewsItems";
import css from "./MovieReviews.module.css"


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
        <div>
            {filmReviews.length !== 0 && <ReviewItems review={filmReviews} />}
            {filmReviews.length === 0 && <p className={css.noReviews}>There is not reviews about this film yet</p>}
        </div>
        
    )
}