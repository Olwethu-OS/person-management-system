import {useState} from "react";
import axios from "axios";

const ViewAll=()=>{

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

    return(
            <table>
                <thead>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Age</th>
                </thead>
                <tbody>
                {people.map((person)=>(
                    <tr key={person.id}>
                        <td className="border">{person.name}</td>
                        <td className="border">{person.surname}</td>
                        <td className="border">{person.age}</td>
                        <td className="border bg-green-400 rounded-md cursor-pointer" > <button type="button" onClick={()=>editPerson(person)}>Edit</button></td>
                        <td className="border bg-red-400 rounded-md cursor-pointer"> <button type="button" onClick={()=>deletePerson(person.id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>


    );
}

export default ViewAll;