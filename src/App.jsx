import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({ name: "", value: "Assign" });
  const [record, setRecord] = useState([]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (data.name.trim() === "") {
      alert("Kindly Fill Task in it.");
    } else {
      const rcds= [...record, { ...data }];
      setRecord(rcds);
      setData({ name: "", value: "Assign" });
    }
  };

  const handleDel = (j) => {
    const rcords = record.filter((_, i) => i !== j);
    setRecord(rcords);
  };
  
  const handleCheckbox = (j) => {
    const updatedRecord = [...record];
    updatedRecord[j].value = updatedRecord[j].value === "Assign" ? "Completed" : "Assign";
    setRecord(updatedRecord);
  };

  return (
    <div className="p-5">
      <h4>Todo Task</h4>
      <div className="mb-3">
        <input
          type="text"
          name="name"
          value={data.name}
          className="form-control-sm"
          onChange={handleChange}
        />
      </div>
      <input
        type="button"
        value="Add"
        onClick={handleClick}
        className="btn btn-primary"
      />
      {record.map((task, j) => (
        <div className="d-flex mb-3 mt-3" key={j}>
          <div className="col-8">
            <span>
              <input
                style={{ cursor: "pointer" }}
                type="checkbox"
                className="form-check-input me-2"
                onClick={() => handleCheckbox(j)}
              />
              <span className="h5">{j + 1}.</span>{" "}
            </span>
            <span
              className={
                task.value === "Assign"
                  ? "h5"
                  : "text-danger text-decoration-line-through h5"
              }
            >
              {task.name}
            </span>
          </div>
          <div className="col-4 d-flex">
            <div className="col-6">
              <span
                className={
                  task.value === "Assign"
                    ? "badge bg-primary"
                    : "badge bg-success"
                }
              >
                {task.value === "Assign" ? "New" : "Completed"}
              </span>
            </div>
            <div
              className="col-6 d-flex justify-content-center align-items-center"
              onClick={() => handleDel(j)}
            >
              <i
                style={{
                  cursor: "pointer",
                  fontSize: "25px",
                  color: "red"
                }}
                className="fa-solid fa-trash-can"
              ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
