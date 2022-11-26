import "../styles/Form.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Message } from "./Message";
import { post } from "../utilities/post";

const SignUpForm = () => {
    const { endpoint, url_paths, message, setMessage, local, saveItem, setLoading } = useContext(GlobalContext);

    const onSubmitSignUp = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = new FormData(e.target);
        const data = {};
        form.forEach((value, key) => {
            data[key] = value;
        })

        if (data.password !== data.repassword) {
            setMessage("passwords does not match");
            setTimeout(() => {
                setMessage(null);
            }, 3000);
        }

        const {status, response } = await post(endpoint+url_paths.signup, data)

        if (status !== 200) {
            setMessage(response.message);
            setTimeout(() => {
                setMessage(null);
            }, 3000)
        } else{
            const newLocal = {...local, ...{"token": response.token}};
            saveItem(newLocal);
        }
        setLoading(false);

    };

    return (
        <div className="signup-form">
            <p className="form__title">Create your account</p>

            {message && <Message message={message}/>}

            <form action="" onSubmit={onSubmitSignUp}>
                <div className="form__input">
                    <label htmlFor="name">full name</label>
                    <input type="text" name="name" id="name" required placeholder="Ivan Castellanos" />
                </div>
                <div className="form__input">
                    <label htmlFor="username">username</label>
                    <input type="text" name="username" id="username" required placeholder="necastellanosb" />
                </div>
                <div className="form__input">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" required placeholder="user@mail.com" />
                </div>
                <div className="form__input">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" required placeholder="type a strong password" />
                </div>
                <div className="form__input">
                    <label htmlFor="repassword">confirm password</label>
                    <input type="password" name="repassword" id="repassword" required placeholder="type again strong password" />
                </div>
                

                <div className="form__button">
                    <button className="button" type="submit">register</button>
                </div>
            </form>
        </div>
    )
};

export { SignUpForm };