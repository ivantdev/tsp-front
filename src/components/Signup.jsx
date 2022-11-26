import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { HeaderText } from "./HeaderText";
import { SignUpForm } from "./SignUpForm";

const Signup = ({ onClickLogin, onClickSignUp }) => {
    const { setLoading } = useContext(GlobalContext);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="signup">
            <HeaderText text_1={"login"} text_2={"register"} reverse={true} onClickOne={onClickLogin} onClickTwo={onClickSignUp} />
            <SignUpForm />
        </div>
    );
};

export { Signup };