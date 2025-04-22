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

    updateCode : async (userEmail, {id, title, language, content}) => {
        return await axios.put(`http://localhost:8080/api/codes/${id}`, {title, language, content}, {
            headers: { 
              'X-USER-EMAIL': userEmail , 
              'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        });
    },

    executeCode : async ({title, language, content }) => { 
        return await axios.post('http://localhost:8080/api/execute', {title, language, content }, {  
            headers: {  
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            },
            responseType: 'text'
        });
    },
}

export default CodeService