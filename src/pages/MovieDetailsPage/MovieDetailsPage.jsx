import { useEffect, useState, useRef } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getFilmsById } from "/src/api.js";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FcFilmReel } from "react-icons/fc";
import { MdOutlineStarRate } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";
import css from "./MovieDetailsPage.module.css"


export default function MovieDetailsPage() {
    const { filmId } = useParams();
    const [film, setFilm] = useState({})

    const location = useLocation()
    const goBack = useRef(location.state?.from ?? "/")

    useEffect(() => {
        async function fetchArticles() {
            const fetch = await getFilmsById(filmId)
            setFilm(fetch)
        }
        fetchArticles()
    }, [filmId])

    const { title, tagline, overview, poster_path, genres, vote_average, release_date } = film
    
    const filmImage = "https://image.tmdb.org/t/p/w500"
    const defaultImage = "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg"

    return (
        <div className={css.container}>
            <Link className={css.goBack} to={goBack.current}><IoArrowBackCircleOutline className={css.goBackIcon} />Go back</Link>
            <div className={css.movieInfo}>
                <img className={css.image} src={poster_path !== null ? `${filmImage}${poster_path}` : defaultImage} />
                <div className={css.movieDetailsWrapper}>
                    <div className={css.movieDetails}>
                        <h2 className={css.title}><FcFilmReel />{title}</h2>
                        {genres && genres.length !== 0 && <ul className={css.genresList}>Genres: {genres && genres.map(({ id, name }) => <li className={css.genresListItem} key={id}>{name}</li>)}</ul>}
                        {tagline !== "" && <h3>Tagline: <p className={css.textInfo}>{tagline}</p></h3>}
                        {overview !== "" && <h3>Overview: <p className={css.textInfo}>{overview}</p></h3>}
                        {vote_average !== null && <h3><p className={css.textInfo}><MdOutlineStarRate className={css.icon} />: {vote_average}</p></h3>}
                        {release_date !== "" && <h3><p className={css.textInfo}><BsCalendar2DateFill className={css.icon} />: {release_date}</p></h3>}
                    </div>
                    <div>
                        <div className={css.linksContainer}>
                            <NavLink className={css.castReviewLink} to={`reviews`}>Reviews</NavLink>
                            <NavLink className={css.castReviewLink} to={`cast`}>Cast</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}
