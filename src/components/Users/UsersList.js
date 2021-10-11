import Card from "../UI/Card";
import Classes from "./UsersList.module.css";
const UsersList = (props) => {
    return (
        <Card className={Classes.users}>
        <ul>{props.users.map(user => <li key={user.id}>
            {user.name} ({user.age} years old)
            </li>)} 
        </ul>
        </Card>
    )
}

export default UsersList;