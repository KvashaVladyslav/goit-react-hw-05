import { MdOutlineStarRate } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa6";
import css from "./MovieReviewsItems.module.css"

export default function ReviewItem({ review }) {
    
    const profileImage = "https://image.tmdb.org/t/p/w500"
    const defaultImage = "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg"

    return (
        <ul className={css.list}>
            {review.map(({ id, author, content, author_details: { avatar_path, rating } }) => <li className={css.listItem} key={id}>
                <div className={css.profile}>
                    <img className={css.image} src={avatar_path !== null ? `${profileImage}${avatar_path}` : defaultImage} alt="" />
                    <p className={css.profileInfo}><FaUserSecret className={css.icon} />{author}</p>
                </div>
                <div className={css.review}>
                    <p className={css.textContent}>{content}</p>
                    {rating && <p className={css.rating}><MdOutlineStarRate className={css.icon} />{rating}</p>}
                </div>
            </li>)}
        </ul>
    )
}