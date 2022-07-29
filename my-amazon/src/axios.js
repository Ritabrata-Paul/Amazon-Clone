import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-e24da/us-central1/app' 
});

export default instance;