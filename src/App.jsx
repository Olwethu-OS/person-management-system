import axios from "axios";
import Input from "./Input.jsx";
import {Route, Routes, useNavigate,useLocation} from "react-router";
//import {BrowserRouter as Router,Route,Switch} from "react-router";
import {useState,useEffect} from "react";

import ViewAll from "./PeopleList.jsx";
import {Update} from "./Edit.jsx";


const App = () => {
    //creating state variables

const navigate=useNavigate();
const location=useLocation();
const person = location.state?.person;
    const [editingPerson, setEditPerson] = useState(() => person ?? null);
    const [name, setName] = useState(() => person?.name ?? "");
    const [surname, setSurname] = useState(() => person?.surname ?? "");
    const [age, setAge] = useState(() => person?.age ?? "");




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









  useEffect(() => {
        const person = location.state?.person;
        if(person){
            setEditPerson(person);
            setName(person.name);
            setSurname(person.surname);
            setAge(person.age);
        }
    }, [location.state]);



  return (
    <div className="grid  grid-rows-2 justify-items-center">





        <Routes>

            <Route path='/' element={
                                 <form className="grid shadow-lg p-6 rounded-md" onSubmit={async (event)=>{
                                    event.preventDefault();
                                    if(editingPerson){
                                        try{
                                            await Update(editingPerson,name,surname,age);
                                            setEditPerson(null);
                                            setName('');
                                            setSurname('');
                                            setAge(null);

                                            navigate('/view-people');
                                        }
                                        catch(err)
                                        {
                                            console.log(err);
                                        }


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
                                        <button className="bg-blue-400 rounded md px-8 cursor-pointer " type="button"  onClick={()=>{navigate('/view-people')}} >View All</button>
                                    </div>

                                </form>


                            }/>
            <Route path='/view-people' element={<ViewAll/>}/>

        </Routes>


    </div>

  );
}

export default App;