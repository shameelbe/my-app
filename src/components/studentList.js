const list =
[
    {
        "id" : 1,
        "firstName": "Shameel",
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
    }
];

const StudentList = () => {
    return (
        <div className="student-list">
            {list.map(student => (
                <div class="student-preview">
                    <h2>{student.firstName} {student.lastName}</h2>
                    <p>Enrolled to {student.course}</p>
                </div>
            ))}
        </div>
    );
}

export default StudentList;