import axios from "axios";

const CommentService = {
    createComment : async (shareCode, content) => {
        try {
            return await axios.post("http://localhost:8080/api/comments", {shareCode, content}, {
                headers : {
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                }
            });
        } catch (error) {
            console.log("CommentService :: createCommnet :: " + error)
            return false
        }
    },

    updateComment : async (commentId, newContent) => {
        try {
            return await axios.put(`http://localhost:8080/api/comments/${commentId}`, {newContent}, {
                headers : {
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                }
            })
        } catch (error) {
            console.log("CommentService :: updateComment :: " + error)
            return false
        }
    },

    deleteComment : async (commentId) => {
        try {
            return await axios.delete(`http://localhost:8080/api/comments/${commentId}`, {
                headers : {
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                }
            })
        } catch (error) {
            console.log("CommentService :: deleteComment :: " + error)
            return false
        }
    }
}

export default CommentService;