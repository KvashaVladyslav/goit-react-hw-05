import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div>
            <h1>Error 404</h1>
            <p>Page is not found!!! <Link to="/">go back</Link></p>
        </div>
    )
}