import axios from 'axios'

const ShareCodeService = {

    createShareCode : async (code, description) => {
        return await axios.post("http://localhost:8080/api/share", {code, description: description}, {
            headers: {
                "X-USER-EMAIL" : localStorage.getItem("userEmail"),
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        });
    },

    getUserShareCodes : async () => {
        return await axios.get("http://localhost:8080/api/share", {
            headers : {
                "X-USER-EMAIL" : localStorage.getItem("userEmail"),
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        });
    },

    getAllShareCodes : async () => {
        return await axios.get("http://localhost:8080/api/share/all", {
            headers : {
                "X-USER-EMAIL" : localStorage.getItem("userEmail"),
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        });
    },

    updateShareCode : async (currentCode, description) =>  {
        return await axios.put(`http://localhost:8080/api/share/${currentCode.id}`, {currentCode, description : description}, {
            headers : {
                "X-USER-EMAIL" : localStorage.getItem("userEmail"),
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        });
    },

    deleteShareCode : async (id) => {
        return await axios.delete(`http://localhost:8080/api/share/${id}`, {
            headers : {
                "X-USER-EMAIL" : localStorage.getItem("userEmail"),
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

}

export default ShareCodeService