import Card from "../UI/Card";
import Classes from "./AddUser.module.css";
import Button from "../UI/Button";
import React, {useState} from 'react';
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername]=useState('');
    const [enteredAge, setEnteredAge]= useState('');
    const [error, setError] = useState('');
    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredAge.trim().length === 0 || enteredUsername.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return
        }
        if(+enteredAge < 1){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age(>0)'
            });
            return
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={Classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input id="username" value={enteredUsername} type = "text" onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input id="age"  value={enteredAge} type="number" onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card></div>
    );
};
export default AddUser;