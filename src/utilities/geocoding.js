
import axios from "axios";

const geocoding = async (params) => {
    const geocodingUrl = process.env.REACT_APP_GOOGLE_MAPS_GEOCODING_API_ENDPOINT + params + `&key=${API_KEY}`;
    const {status, response } = await axios.get(encodeURI(geocodingUrl))
        .then(response => {
            return ({
                "status": response.status,
                "response": response.data
            });
        })
        .catch(error => {
            return ({
                "status": error.response.status,
                "response": error.response.data
            });
        });
    return { status, response };
};

export { geocoding };;