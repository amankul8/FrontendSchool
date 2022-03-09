import axios from "axios";
import {baseApiUrl} from "../appConfig/config";

const appAxios = axios.create({
   baseURL: baseApiUrl,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default appAxios;
