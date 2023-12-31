import React, { useState } from 'react';

const ShowRecord = ({ data, setData, record, setRecord }) => {

  const handleCheckbox = (index) => {
    const updatedRecord = [...record];
    updatedRecord[index].value = updatedRecord[index].value === 'Assign' ? 'Completed' : 'Assign';
    setRecord(updatedRecord);
  };

  const handleDelete = (index) => {
    const updatedRecord = record.filter((_, i) => i !== index);
    setRecord(updatedRecord);
  };

  return (
    <div className='mt-5'>
      {record.map((task, index) => (
        <div key={index} className='mt-3'>
          <div className='row'>
            <div className="col-2 h5">
              <input
                id={data.id}
                onChange={() => handleCheckbox(index)}
                checked={task.value === 'Completed'}
                className='pointer'
                type="checkbox"
                name=""
              />
              <span className='ms-3'>{index + 1}</span>
            </div>
            <div className="col-4 h4 m-0 p-0">
              <span className={task.value === "Assign" ? "text-primary" : "text-danger text-decoration-line-through"} >{task.name}</span>
            </div>
            <div className="col-2">
              <span className={task.value === "Assign" ? "badge bg-primary fs-6" : "badge bg-success fs-6"}>
                {task.value === 'Assign' ? 'Assign' : 'Completed'}
              </span>
            </div>
            <div className="col-2">
              <span className='me-5 pointer h4'>
                <i className="fa-solid fa-pen-to-square text-success"></i>
              </span>
            </div>
            <div onClick={() => handleDelete(index)} className="col-2">
              <span className='pointer h4 text-danger'>
                <i className="fa-solid fa-trash-can"></i>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowRecord;
