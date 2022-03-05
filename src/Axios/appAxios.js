import axios from "axios";

const appAxios = axios.create({
   baseURL: "https://limitless-savannah-57666.herokuapp.com/api",
    headers: {
        'Content-Type': 'application/json',
    }
});

export default appAxios;
