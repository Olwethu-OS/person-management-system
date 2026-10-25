import {useEffect, useState} from "react";
import axios from "axios";
import {Update,Edit} from "./Edit.jsx";
import {useNavigate} from "react-router";
import DeletePerson from "./Delete.jsx";

const ViewAll=()=>{
    const navigate=useNavigate();

    const [people,setPeople]= useState([]);
    const fetchAll=async ()=>{
        try{

            const response = await axios.get('http://localhost:8081/sendRequest');
            setPeople(response.data);
            console.log(response.data);
            }
            catch (err){
                console.log(err);
            }
    };
    useEffect(() => {
        fetchAll();
    }, []);

    async function handleDelete(id) {
        if (!window.confirm("Are you sure you want to delete this person?")) {
            return;
        }

        try {
            await DeletePerson(id);

            // Remove the deleted person from the displayed table
            setPeople((previousPeople) =>
                previousPeople.filter((person) => person.id !== id)
            );
        } catch (error) {
            console.error("Failed to delete person:", error);
        }
    }

    return(
        <div className='w-full overflow-x-auto rounded-xl shadow-lg border border-gray-200'>
            <table className="w-full text-left border-collapse">
                <thead className='bg-blue-600 text-white'>
                <tr>
                    <th className="px-6 py-4 font-semibold">Name</th>
                    <th className="px-6 py-4 font-semibold">Surname</th>
                    <th className="px-6 py-4 font-semibold">Age</th>
                    <th className="px-6 py-4 font-semibold text-center">Actions</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {people.map((person) => (
                    <tr key={person.id}
                        className="bg-white hover:bg-blue-50 transition-colors duration-200">
                        <td className="px-6 py-4 text-gray-800">{person.name}</td>
                        <td className="px-6 py-4 text-gray-800">{person.surname}</td>
                        <td className="px-6 py-4 text-gray-800">{person.age}</td>
                        <td className="px-6 py-4r" >
                            <div className="flex justify-center gap-3">
                                <button type="button" onClick={()=>
                            navigate('/',{state: { person }})} className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer">Edit</button>
                         <button type="button" onClick={()=>
                             handleDelete(person.id)}  className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer">Delete</button></div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
}

export default ViewAll;