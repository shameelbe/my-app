import { useState } from "react";
import StudentList from "./studentList";

const Content = () => {
    const [students, setStudents] = useState(        
        [
        {
            "id" : 1,
            "Header": "Musk Bought Tesla",
            "lastName": "Abdul",
            "course": "MERN"
        },
        {
            "id" : 2,
            "firstName": "Jack",
            "lastName": "Sparrow",
            "course": "Python"
        },
        {
            "id" : 3,
            "firstName": "Ricky",
            "lastName": "Ponting",
            "course": "MERN"
        },
        {
            "id" : 4,
            "firstName": "Watson",
            "lastName": "Daniel",
            "course": "PYTHON"
        },
        {
            "id" : 5,
            "firstName": "Kayla",
            "lastName": "Mccausson",
            "course": "MERN"
        }
    ]);

    const [searchText, setSearchText] = useState("");

    const deleteHandler = (id) => {
        const list = students.filter(student => student.id != id);
        setStudents(list);
    };

    return (
        <div>
            <StudentList students={students} header="All Students" deleteHandler={deleteHandler}></StudentList>
            <br/>
            <label>Search : </label>
            <input
            name='searchText'
            id='searchText'
            type='text'
            value={searchText}
            onChange={e => setSearchText(e.target.value) }
            ></input>
            {searchText && <StudentList students={students.filter((student) => student.course.toLowerCase() === searchText.toLowerCase())} header= {"Search Result - " + searchText} deleteHandler={deleteHandler}></StudentList>}
        </div>
    );
}

export default Content;