import { HeaderText } from "./HeaderText";
import { SignUpForm } from "./SignUpForm";

const Signup = ({ onClickLogin, onClickSignUp }) => {
    return (
        <div className="signup">
            <HeaderText text_1={"login"} text_2={"register"} reverse={true} onClickOne={onClickLogin} onClickTwo={onClickSignUp} />
            <SignUpForm />
        </div>
    );
};

export { Signup };