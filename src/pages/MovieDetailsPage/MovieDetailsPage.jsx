import { useEffect, useState, useRef } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getFilmsById } from "/src/api.js";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FcFilmReel } from "react-icons/fc";
import { MdOutlineStarRate } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";


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
        <div>
            <Link to={goBack.current}><IoArrowBackCircleOutline />Go back</Link>
            <div>
                <img src={poster_path !== null ? `${filmImage}${poster_path}` : defaultImage} />
                <div>
                    <h2><FcFilmReel />{title}</h2>
                    <ul>Genres: {genres && genres.map(({id,name}) => <li key={id}>{name}</li>)}</ul>
                    <p>Tagline: {tagline}</p>
                    <p>Overview: {overview}</p>
                    <p><MdOutlineStarRate /> : {vote_average}</p>
                    <p><BsCalendar2DateFill />: {release_date}</p>
                </div>
            </div>
            <NavLink to={`reviews`}>Reviews</NavLink>
            <NavLink to={`cast`}>Cast</NavLink>
            <Outlet/>
        </div>
    )
}
