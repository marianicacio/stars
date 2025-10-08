import axios from "axios";

const api = axios.create({
    baseURL: "https://parkingapisenai.azurewebsites.net",
})

export default api 

export async function login(email, senha) {
    const response = await api.post("auth/login", {email, senha})
    return response.data
} 

export async function registrer(nome, senha, email) {
    const response = await api.post("auth/register", {nome, senha, email})
    return response.data
}

export async function name(params) {
    
}