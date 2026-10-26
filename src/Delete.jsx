
import axios from "axios";

const DeletePerson = async (id) => {
    try {
        const response = await axios.delete(
            `http://localhost:8081/sendRequest/deletePerson/${id}`
        );

        console.log("Person deleted successfully");
        return response.data;
    } catch (error) {
        console.error("Error deleting person:", error);
        throw error;
    }
};

export default DeletePerson;
