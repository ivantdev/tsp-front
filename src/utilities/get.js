import axios from "axios";

const get = async (url, data = {}, config = {}) => {
    const { status, response } = await axios.get(url, data, config)
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

export { get };