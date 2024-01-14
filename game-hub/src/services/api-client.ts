import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "a1f22c82f97c4168ad276741905aa82d"
    }
})
