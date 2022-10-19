const Banner = ({ text, imgUrl, color, alt }) => {
    return (
        <div className="banner" style={{backgroundColor: color}}>
            <p>{text}</p>
            <div className="banner-img">
                <img src={imgUrl} alt={alt} />
            </div>
        </div>
    )
};

export { Banner };