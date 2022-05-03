const StudentList = ({students, header, deleteHandler}) => {
    return (
        <div className="student-list">
            <h2 style={{"padding": "20px"}}>{header}</h2>
            {students.map(student => (
                <div key={student.id} className="student-preview">
                    <h2>{student.firstName} {student.lastName}</h2>
                    <p>Enrolled to {student.course}</p>
                    <button onClick={() => deleteHandler(student.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default StudentList;