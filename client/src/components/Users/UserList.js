import Card from '../UI/Card';
import styles from './UserList.module.css';

const UserList = (props) => {
    console.log(props)

    // const numbers = [
    //     { name: 'Alex', age: 15 },
    //     { name: 'Max', age: 25 }
    // ]

    // const res = numbers.map((el) => `Я ${el.name}, мне ${el.age} лет`)

    // console.log(res)

    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map((user) => {
                    return <li key={user.id}>{user.name} - {user.age} лет</li>
                })}
            </ul>
        </Card>
    )
}

export default UserList;