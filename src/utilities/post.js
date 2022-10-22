
import axios from "axios";

const post = async (url, data) => {
    const {status, response } = await axios.post(url, data)
        .then(response => {
            return ({
                "status": response.status,
                "response": response.data
            })
        })
        .catch(error => {
            return ({
                "status": error.response.status,
                "response": error.response.data
            })
        });
    return { status, response };
};

export { post };