import React, { useState } from "react";
import StudentForm from "./StudentForm";
const jsonData = [{ id: 1, name: "Akshit", city: "Moradabad" }];

function TableData() {
  const [studentData, setStudentData] = useState(jsonData);
  const Deletme = (e) => {
    let id = e.target.id;
    console.log(id);
    console.log(studentData);
    let update = studentData.filter((item) => {
      console.log(item.id, id);
      return item.id !== Number(id);
    });
    console.log(update);
    setStudentData(update);
  };
  const tableRows = studentData.map((info) => {
    return (
      <tr>
        <td id={info.id}>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.city}</td>
        <td>
          <button id={info.id} onClick={Deletme}>
            Delete
          </button>
        </td>
      </tr>
    );
  });

  const addRows = (data) => {
    const totalStudents = studentData.length;
    data.id = totalStudents + 1;
    const updatedStudentData = [...studentData];
    updatedStudentData.push(data);
    setStudentData(updatedStudentData);
  };

  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>Name</th>
            <th>City</th>
            <th>Delet</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <StudentForm func={addRows} />
    </div>
  );
}

export default TableData;
