import "./style.css"

export default function UserCard({
    name,
    user,
    followers,
    following,
    avatar
}) {
    return (
        <div className="user-card">
            <img className="avatar-img" src={avatar} alt="Profile" />
            <strong>{name}</strong>
            <span>{user}</span>
            <p>{followers} seguidores</p>
            <p>{following} seguindo</p>
        </div>
    )
}
