import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { HeaderText } from "./HeaderText";
import { LoginForm } from "./LoginForm";

const Login = ({ onClickLogin, onClickSignUp }) => {
    const { setLoading } = useContext(GlobalContext);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="login">
            <HeaderText text_1={"login"} text_2={"register"} onClickOne={onClickLogin} onClickTwo={onClickSignUp} />
            <LoginForm />
        </div>
    );
};

export { Login };