import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const InputShow = ({ data, setData, record, setRecord }) => {
  const handleShow = (e) => {

    e.preventDefault();

    if (data.name.trim() === "") {
      alert("Kindly Enter Task Here...");
      return;
    }

    const isDuplicate = record.some(
      (findTask) => findTask.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isDuplicate) {
      alert("Oops! Try to Add a New Task");
    } else {
      const updatedRecords = [...record, { ...data }];
      setRecord(updatedRecords);
      setData({ name: "", value: "Assign", id:uuidv4().slice(0, 4) });
    }

  };

  const handleReset=()=>{
    setRecord([]);
  }

  return (
    <>
      <input
      className='btn btn-outline-primary ms-3'
      type="button"
      value="Add Task"
      onClick={handleShow}
    />
    <input
      className='btn btn-outline-primary ms-3'
      type="button"
      value="Reset"
      onClick={handleReset}
    />
    </>
  );
};

export default InputShow;
