import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Banner } from "./Banner";

const Banners = () => {
    const banners = useContext(GlobalContext).banners;
    return (
        <div className="banners-container">
            {
                banners.map(banner => (
                    <Banner key={banner.id}
                            text={banner.text}
                            imgUrl={banner.img}
                            color={banner.color}
                            alt={banner.alt}
                        />
                ))
            }
        </div>
    );
};

export { Banners };