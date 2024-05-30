import { MdOutlineStarRate } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa6";

export default function ReviewItem({ review }) {
    
    const profileImage = "https://image.tmdb.org/t/p/w500"
    const defaultImage = "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg"

    return (
        <div>
            {review.map(({ id, author, content, author_details: { avatar_path, rating } }) => <li key={id}>
                <img src={avatar_path !== null ? `${profileImage}${avatar_path}` : defaultImage} alt="" />
                <p><FaUserSecret />{author}</p>
                <p>{content}</p>
                <p><MdOutlineStarRate />{rating}</p>
            </li>)}
        </div>
    )
}