import axios from "axios"

const customFetch = axios.create({
    baseURL: "https://cdn.contentful.com",
})
