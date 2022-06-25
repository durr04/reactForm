import React, { useState } from "react";

function StudentForm(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");
  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeGender = (event) => {
    setGender(event.target.value);
  };

  const changeDOB = (event) => {
    console.log(event.target.value);
    setDOB(event.target.value);
  };
  const transferValue = (event) => {
    event.preventDefault();
    if (name === "" || gender === "" || dob === "") {
      alert("Please fill all values");
      return false;
    }

    const val = {
      name,
      gender,
      dob
    };
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setName("");
    setGender("");
    setDOB("");
  };

  return (
    <div>
      <label>Name</label>
      <input type="text" value={name} onChange={changeName} />
      <label>DOB</label>
      <input type="date" value={dob} onChange={changeDOB} />
      <label>Gender</label>
      <select name="gender" required value={gender} onChange={changeGender}>
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Fale</option>
      </select>
      <button onClick={transferValue}> Click Me</button>
    </div>
  );
}

export default StudentForm;
