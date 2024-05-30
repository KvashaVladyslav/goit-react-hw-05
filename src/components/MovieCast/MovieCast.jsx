import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCastItem from "../MovieCastItem/MovieCastItem";
import { getCastList } from "../../api";

export default function MovieCast() {
    const { filmId } = useParams()
    const [filmCast, setFilmCast] = useState([])

    useEffect(() => {
        if (!filmId) return;
        async function getCast() {
            const fetchCastList = await getCastList(filmId)
            setFilmCast(fetchCastList.cast)
        }
        getCast()
    }, [filmId])

    return (
        <div>
            {filmCast.length === 0 && <p>There is not any information about the film cast</p>}
            <ul><MovieCastItem cast={filmCast} /></ul>
        </div>
    )
}