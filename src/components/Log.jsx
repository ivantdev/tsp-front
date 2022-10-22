import { useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup"

const Log = () => {
    const [ login, setLogin ] = useState(true);
    const onClickLogin = () => {
        setLogin(true);
    };
    const onClickSignUp = () => {
        setLogin(false);
    };

    return(
        <>
            {login ?
                <Login onClickLogin={onClickLogin} onClickSignUp={onClickSignUp} /> :
                <Signup onClickLogin={onClickLogin} onClickSignUp={onClickSignUp} />
            }
        </>
    );
};

export { Log };