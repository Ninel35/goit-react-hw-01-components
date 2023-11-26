import css from './profile.module.css';



const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
        alt="User avatar"
        height="100"
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

    <ul className={css.stats}>
    <li className={css.stat}>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers }</span>
    </li>
    <li className={css.stat}>
      <span className="label">Views</span>
      <span className="quantity">{stats.views }</span>
    </li>
    <li className={css.stat}>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes }</span>
    </li>
  </ul>
  </div>
);
export default Profile