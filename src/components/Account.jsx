import "../styles/Account.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Log } from "./Log";
import { HeaderText } from "./HeaderText";

const Account = () => {
    const { local, user, setLoading } = useContext(GlobalContext);
    if ( !local?.token ) {
        return(
            <Log />
        )
    }

    setLoading(false);
    return (
        <div className="account__container">
            <HeaderText text_1={"my"} text_2={"account"} />
            <div className="account">
                <div className="account__picture">
                    <img src=
                        {user?.picture ?
                        user.picture :
                        "https://objects.ivant.dev/public/projects/tsp/imgs/profile.png"
                    }
                    alt="" />
                </div>

                <div className="account__data">
                    <h3>{user?.name}</h3>
                    <span>phone: {user?.phone}</span>
                    <span>e-mail: {user?.email}</span>
                </div>

                <div className="account__options">
                    <button className="option__help">
                            <span className="icon">
                                <i className="fa-light fa-circle-info"></i>
                            </span>
                            <span className="text">Help</span>
                    </button>

                    <button className="option__delete">
                            <span className="icon">
                                <i className="fa-light fa-trash"></i>
                            </span>
                            <span className="text">Delete Account</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export { Account };