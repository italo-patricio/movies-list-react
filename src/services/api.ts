import Axios from 'axios';
import {Config} from "../config/app-config";

const Api = Axios.create({
    baseURL: Config.API_URL
});

export default Api;



