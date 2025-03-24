import axios from 'axios'

const CodeService = {
    getAllCodes : async (userEmail) => {
        return await axios.get('http://localhost:8080/api/codes', {
            headers: { 
              'X-USER-EMAIL': userEmail,
              'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        });
    },

    createCode : async (userEmail, currentCode) => {
        return await axios.post('http://localhost:8080/api/codes', currentCode, {
            headers: { 
              'X-USER-EMAIL': userEmail , 
              'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        });
    },

    executeCode : async ({ language, content }) => { 
        return await axios.post('http://localhost:8080/execute', { language, content }, {  
            headers: {  
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        });
    },

}

export default CodeService