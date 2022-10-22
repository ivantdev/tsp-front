import "../styles/Message.css";

const Message = ({ message }) => {
    if (message) {
        return (
            <div className="message">
                <p>{message}</p>
            </div>
        )
    }
};

export { Message };