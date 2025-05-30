import { useState } from 'react';
import CreateUser from './components/Users/CreateUser';
import UserList from './components/Users/UserList';

function App() {

  const [userList, setUserList] = useState([])

  const createUserHandler = (name, age) => {
    console.log(name, age)
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          name: name,
          age: age,
          id: Date.now()
        }
      ]
    })
  }

  return (
    <>
      <CreateUser onCreateUser={createUserHandler} />
      <UserList users={userList} />
    </>
  );

}

export default App;
