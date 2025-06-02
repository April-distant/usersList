import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './CreateUser.module.css'

const CreateUser = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [error, setError] = useState();

    const createUserHandler = (event) => {
        event.preventDefault()

        if (inputName.trim().length === 0) {

            setError({
                title: 'Некорректный ввод',
                message: 'Поля ввода не могут быть пустыми!'
            })
            return

        }

        if (+inputAge < 1 || +inputAge > 100) {
            setError({
                title: 'Некорректный возраст',
                message: 'Возраст должен быть больше ноля!'
            })
            return
        }

        props.onCreateUser(inputName, inputAge)

        setInputName('');
        setInputAge('');
    }

    const nameChangeHandler = (event) => {
        setInputName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setInputAge(event.target.value)
    }

    return (
        <>
            {error
                && <ErrorModal
                    title={error.title}
                    message={error.message}>
                </ErrorModal>}
            <Card className={styles.input}>
                <form onSubmit={createUserHandler}>
                    <label htmlFor="name">Имя</label>
                    <input id='name'
                        type='text'
                        onChange={nameChangeHandler}
                        value={inputName} />

                    <label htmlFor="age">Возраст</label>
                    <input id='age'
                        type='number'
                        onChange={ageChangeHandler}
                        value={inputAge} />

                    {/* <button type='submit'>Добавить пользователя</button> */}
                    <Button type="submit">Добавить пользователя</Button>

                </form>
            </Card>
        </>
    )

}

export default CreateUser;