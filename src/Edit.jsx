//import {useState} from "react";
import axios from "axios";



    export function Edit(person,setEditPerson,setName,setSurname,setAge){

        setEditPerson(person);
        setName(person.name);
        setSurname(person.surname);
        setAge(person.age);
    }
    export async function Update(editPerson,name_p,surname_p,age_p)
    {
        if(!editPerson) return;


            const response = await axios.put(`http://localhost:8081/sendRequest/${editPerson.id}`,
                {name:name_p,surname: surname_p,age: Number(age_p)});

            return response.data;

        }



