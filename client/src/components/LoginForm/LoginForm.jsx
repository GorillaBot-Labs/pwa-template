import React, {useContext, useState} from 'react';
import AuthService from '../../services/AuthService/AuthService';
import UserContext from "../../contexts/UserContext";

const LoginForm = ({onSubmit}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const {setUser} = useContext(UserContext);

    const isDisabled = !email || !password;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const user = await AuthService.login(email, password);

            setUser(user);
            onSubmit(user);
        } catch (error) {
            setErrorMessage("Username or password was incorrect");
        }
    };

    return (
        <div>
            <div data-testid="errorMessage">{errorMessage}</div>
            <form data-testid="loginForm">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} data-testid="email"/>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}  data-testid="password"/>
                <button disabled={isDisabled} onClick={handleSubmit} data-testid="submit">Submit</button>
            </form>
        </div>
    )
};

export default LoginForm;
