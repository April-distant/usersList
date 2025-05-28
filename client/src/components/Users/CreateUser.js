import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './CreateUser.module.css'

const CreateUser = () => {

    return (
        <Card className={styles.input}>
            <form>
                <label htmlFor="name">Имя</label>
                <input id='name' type='text' />

                <label htmlFor="age">Возраст</label>
                <input id='age' type='number' />

                {/* <button type='submit'>Добавить пользователя</button> */}
                <Button type="submit">Добавить пользователя</Button>

            </form>
        </Card>
    )

}

export default CreateUser;