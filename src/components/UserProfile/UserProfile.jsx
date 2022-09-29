import css from "components/UserProfile/UserProfile.module.css";

export const UserProfile = ({ username, tag, location, avatar, followers, views, likes }) => {    
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={css.avatar}
                />
                <p className={css.username}>{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>
            <ul className={css.stats}>
                <li className={css.statList}>
                    <span className="label">Followers</span>
                    <span className={css.listQuantity}>{followers}</span>
                </li>
                <li className={css.statList}>
                    <span className="label">Views</span>
                    <span className={css.listQuantity}>{views}</span>
                </li>
                <li className={css.statList}>
                    <span className="label">Likes</span>
                    <span className={css.listQuantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}