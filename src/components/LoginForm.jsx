import "../styles/Form.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Message } from "./Message";
import { post } from "../utilities/post";

const LoginForm = () => {
    const { endpoint, url_paths, message, setMessage, local, saveItem, setLoading} = useContext(GlobalContext);

    const onSubmitLogin = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = {};
        form.forEach((value, key) => {
            data[key] = value;
        })
        
        const { status, response } = await post(endpoint+url_paths.login, data);

        if (status !== 200) {
            setMessage(response.message);
            setTimeout(() => {
                setMessage(null);
            }, 3000);
        } else{
            const newLocal = {...local, ...{"token": response.token}};
            saveItem(newLocal);
        }
    };

    return (
        <div className="login-form">
            <p className="form__title">Welcome back!</p>

            {message && <Message message={message}/>}

            <form action="" onSubmit={onSubmitLogin}>
                <div className="form__input">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" required placeholder="username@mail.com" />
                </div>
                <div className="form__input">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" required placeholder="your strong password" />
                </div>

                <div className="form__button">
                    <button className="button" type="submit">login</button>
                </div>
            </form>
        </div>
    );
};

export { LoginForm };