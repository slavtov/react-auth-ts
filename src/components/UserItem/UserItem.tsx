import './UserItem.css'

interface Props {
  item: {
    username: string
    email: string
    date: string
  }
}

const UserItem: React.FC<Props> = ({ item: { username, email, date } }) => (
  <div className="user-item">
    <h3>{username}</h3>
    <p>{email}</p>
    <p>{date}</p>
  </div>
)

export default UserItem
