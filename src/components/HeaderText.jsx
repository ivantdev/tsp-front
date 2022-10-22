import "../styles/HeaderText.css";

const HeaderText = ( {text_1, text_2, reverse = false, onClickOne = null, onClickTwo = null} ) => {
    return (
        <div className={reverse ? "header-title reverse" : "header-title"}>
            <span onClick={() => (onClickOne ? onClickOne() : null)} className="text-1">{text_1}</span>
            <span onClick={() => (onClickTwo ? onClickTwo() : null)} className="text-2">{text_2}</span>
        </div>
    );
};

export { HeaderText };