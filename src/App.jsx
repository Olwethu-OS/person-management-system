import axios from "axios";
import Input from "./Input.jsx";
import {Route, Routes} from "react-router";
//import {BrowserRouter as Router,Route,Switch} from "react-router";
import {useEffect, useState} from "react";
import ViewAll from "./PeopleList.jsx";

const App = () => {
    //creating state variables
    const [posts,setPosts] = useState([]);
const [name,setName]=useState(['']);
const [surname,setSurname]=useState(['']);
const [age,setAge]=useState([null]);
const [editingPerson,setEditPerson] = useState(null);


/*creating a function that will set an object/object values
* an event receive information about the event that occured*/
const createPerson=async (event)=>{
    event.preventDefault(); //prevents the browser from refreshing the page when form submitted
    const person={name: name,surname: surname,age: Number(age)};
    try{
       const response= await axios.post('http://localhost:8081/sendRequest',person);
        console.log('Person saved', response.data);
        event.target.reset();
        setName("");
        setSurname("");
        setAge("");
    }
    catch(err)
    {
        console.log(err);
    }
    console.log(person);
}



   /* const fetchPosts= async () => {
        try {
            const response = await axios.get(
                'http://localhost:8081/sendRequest');
            setPosts(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }

    };*/




     const deletePerson = async (id)=>{
         const response=await axios.delete(`http://localhost:8081/sendRequest/deletePerson/${id}`);
         console.log(response.data);
          <ViewAll/>;
      };
    const editPerson = (person) => {
        setEditPerson(person);
        setName(person.name);
        setSurname(person.surname);
        setAge(person.age);
    };
    const updatePerson = async () => {
        try{
            const response = await
                axios.put(`http://localhost:8081/sendRequest/${editingPerson.id}`,

                    {name: name,
                    surname: surname,
                    age: Number(age)});
            setEditPerson(null);
            setName("");
            setSurname("");
            setAge("");
            <ViewAll/>;


        }catch(err){
            console.log("Error updating",err);
        }
    };



  return (
    <div className="grid  grid-rows-2 justify-items-center">


      {/*<form className="grid shadow-lg p-6 rounded-md" onSubmit={(event)=>{*/}
      {/*event.preventDefault();*/}
      {/*if(editingPerson){*/}
      {/*    updatePerson();*/}
      {/*}*/}
      {/*else*/}
      {/*    {*/}
      {/*        createPerson(event);*/}
      {/*}*/}
      {/*}}>*/}

      {/*    <h1 className="text-3xl font-bold" >Personal Details</h1>*/}

      {/*  <label>First Name:</label>*/}
      {/*  <Input type="text" required placeholder="Enter your Name" value={name} onChange={(event)=>setName(event.target.value)}/>*/}
      {/*   <label>Last Name:</label>*/}
      {/*  <Input type="text" required placeholder="Enter your surname" value={surname} onChange={(event)=>setSurname(event.target.value)}/>*/}
      {/*   <label>Age:</label>*/}
      {/*  <Input type="text" required placeholder="Enter your age" value={age} onChange={(event)=>setAge(event.target.value)}/>*/}
      {/*    <div className="flex gap-30 my-10">*/}
      {/*  <button className=" bg-blue-400 rounded-sm px-8 ml-2 cursor-pointer"  type="submit" >{editingPerson ? "update Person" :"Add Person"}</button>*/}
      {/*    <button className="bg-blue-400 rounded md px-8 cursor-pointer " type="button"  onClick={()=>{<ViewAll/>}} >View All</button>*/}
      {/*    </div>*/}

      {/*</form>*/}


        {/*<table className="border border-collapse mt-20 w-100 h-20">*/}
        {/*    <thead>*/}
        {/*    <tr>*/}
        {/*        <th className="border">Name</th>*/}
        {/*        <th className="border">Surname</th>*/}
        {/*        <th className="border">Age</th>*/}
        {/*        <th colSpan="2" className="border">Action</th>*/}
        {/*    </tr>*/}
        {/*    </thead>*/}
        {/*    <tbody>*/}
        {/*    {posts.map((person)=>(*/}
        {/*    <tr key={person.id}>*/}
        {/*        <td className="border">{person.name}</td>*/}
        {/*        <td className="border">{person.surname}</td>*/}
        {/*        <td className="border">{person.age}</td>*/}
        {/*            <td className="border bg-green-400 rounded-md cursor-pointer" > <button type="button" onClick={()=>editPerson(person)}>Edit</button></td>*/}
        {/*        <td className="border bg-red-400 rounded-md cursor-pointer"> <button type="button" onClick={()=>deletePerson(person.id)}>Delete</button></td>*/}
        {/*    </tr>*/}
        {/*    ))}*/}
        {/*    </tbody>*/}
        {/*</table>*/}

        <Routes>
            <Route path='/' element={
                                 <form className="grid shadow-lg p-6 rounded-md" onSubmit={(event)=>{
                                    event.preventDefault();
                                    if(editingPerson){
                                        updatePerson();
                                    }
                                    else
                                    {
                                        createPerson(event);
                                    }
                                }}>

                                    <h1 className="text-3xl font-bold" >Personal Details</h1>

                                    <label>First Name:</label>
                                    <Input type="text" required placeholder="Enter your Name" value={name} onChange={(event)=>setName(event.target.value)}/>
                                    <label>Last Name:</label>
                                    <Input type="text" required placeholder="Enter your surname" value={surname} onChange={(event)=>setSurname(event.target.value)}/>
                                    <label>Age:</label>
                                    <Input type="text" required placeholder="Enter your age" value={age} onChange={(event)=>setAge(event.target.value)}/>
                                    <div className="flex gap-30 my-10">
                                        <button className=" bg-blue-400 rounded-sm px-8 ml-2 cursor-pointer"  type="submit" >{editingPerson ? "update Person" :"Add Person"}</button>
                                        <button className="bg-blue-400 rounded md px-8 cursor-pointer " type="button"  onClick={()=>{<ViewAll/>}} >View All</button>
                                    </div>

                                </form>


                            }/>
            <Route path='/view-people' element={<ViewAll/>}/>

        </Routes>


    </div>

  );
}

export default App;