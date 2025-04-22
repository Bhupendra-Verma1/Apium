import axios from 'axios'

const AuthService = {
    login : async (formData) => {
        try {
            return await axios.post('http://localhost:8080/auth/login', formData);
            
        } catch (error) {
            console.log("AuthService :: login :: " , error)
            return false
        }
    },

    register : async (formData) => {
        try {
            return await axios.post('http://localhost:8080/auth/register', formData);
            
        } catch (error) {
            console.log("AuthService :: register :: " , error)
            return false
        }
    }
}

export default AuthService