import { ImMan } from "react-icons/im";
import { ImWoman } from "react-icons/im";
import { GiSwordman } from "react-icons/gi";
import { GiSwordwoman } from "react-icons/gi";

export default function MovieCastItem({ cast }) {

    const defaultImage = "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg"
    const profileImage = "https://image.tmdb.org/t/p/w500"

    return (
        <div>
            {cast.map(({id,name,character, profile_path, gender}) => <li key={id}>
                <img src={profile_path !== null ? `${profileImage}${profile_path}` : defaultImage} alt={character} />
                <p>{gender === 1 ? <ImWoman /> : <ImMan /> }{name}</p>
                <p>{gender === 1 ? <GiSwordwoman /> : <GiSwordman /> } Role: {character}</p>
            </li>)}
        </div>
    )
}
