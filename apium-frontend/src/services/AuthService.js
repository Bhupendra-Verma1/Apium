import axios from 'axios'

const AuthService = {
    login : async (formData) => {
        return await axios.post('http://localhost:8080/auth/login', formData);
    },

    register : async (formData) => {
        return await axios.post('http://localhost:8080/auth/register', formData);
    }
}

export default AuthService