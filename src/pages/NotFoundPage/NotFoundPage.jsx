import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import css from "./NotFoundPage.module.css"

export default function NotFoundPage() {
    return (
        <div>
            <h1>Error 404</h1>
            <p className={css.text}>Page is not found!!! <Link to="/" className={css.goBack}> <IoArrowBackCircleOutline className={css.goBackIcon} />Go back</Link></p>
        </div>
    )
}