import { Link } from "react-router-dom"
import css from "./MovieList.module.css"
import { FcFilmReel } from "react-icons/fc";

export default function MovieList({ films, location }) {
    return (
        <div>
            <ul className={css.list}>{films.map(({id, title}) => <li className={css.listItem} key={id}><FcFilmReel className={css.icon} />
                <Link to={`/movies/${id}`} state={location}>{title}</Link>
            </li>)}</ul>
        </div>
    )
}