import "../styles/Account.css";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Log } from "./Log";
import { HeaderText } from "./HeaderText";
import { get } from "../utilities/get";
import { useState } from "react";

const Account = () => {
    const { local, setLoading, endpoint, url_paths } = useContext(GlobalContext);
    const [ user, setUser ] = useState(null);

    const get_user = async () => {
        const config = {
            headers: {
                "Authorization": `Bearer ${local.token}`,
            }
        };
        const { status, response } = await get(endpoint + url_paths.user, config);
        if(status == 200) {
            setUser(response);
        }


        setLoading(false)
    }
    useEffect(() => {
        if( local?.token) {
            get_user();
        } else {
            setLoading(false);
        }
    }, [local]);

    if ( !local?.token ) {
        return(
            <Log />
        )
    }

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
                    <span>username: {user?.username}</span>
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