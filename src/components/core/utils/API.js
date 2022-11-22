import axios from "axios";
import { useIsLoggedIn } from "../hooks/useIsLoggedIn";

export const BASE_URL = process.env.REACT_APP_API_URL;

const API = async (endPoint, req = { body: {} }, type = "GET") => {
    const isLogged = useIsLoggedIn();
    const ud = JSON.parse(localStorage.getItem("ud"));
    try {
        const request = {
            url: BASE_URL + endPoint,
            body: req.body,
        };
        const config = {
            headers: {
                "auth-token": isLogged ? ud.utoken : null,
            },
        };
        switch (type) {
            case "POST":
                return axios.post(request.url, req.body, config);

            case "GET":
                return axios.get(request.url, config);

            case "PUT":
                return axios.put(request.url, req.body, config);

            case "DELETE":
                return axios.delete(request.url, { data: request.body } || {});

            default:
                return {
                    success: false,
                    data: { message: "Unknown API request" },
                };
        }
    } catch (error) {
        console.log("ERROR:", error);
    }
};

export default API;
