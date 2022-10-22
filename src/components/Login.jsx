import { HeaderText } from "./HeaderText";
import { LoginForm } from "./LoginForm";

const Login = ({ onClickLogin, onClickSignUp }) => {
    return (
        <div className="login">
            <HeaderText text_1={"login"} text_2={"register"} onClickOne={onClickLogin} onClickTwo={onClickSignUp} />
            <LoginForm />
        </div>
    );
};

export { Login };