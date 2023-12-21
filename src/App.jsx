import React, { useState } from "react";

const App = () => {
    const [data, setdata] = useState({ name: "", value: "Assign" });
    const [record, setRecord] = useState([]);

    const handleChange = (evt) => {
        setdata({ ...data, [evt.target.name]: evt.target.value });
    };

    const handleClick = () => {
        if (data.name === "") {
            alert("Kindly Fill Task in it.");
        } else {
            const rcds = [...record, { ...data }];
            setRecord(rcds);
            setdata({ name: "", value: "Assign" });
        }
    };

    const handleDel = (j) => {
        const rcords = record.filter((_, i) => i !== j);
        setRecord(rcords);
    };

    const handleToggle = (j) => {
        const updatedRecord = [...record];
        updatedRecord[j].value = updatedRecord[j].value === "Assign" ? "Completed" : "Assign";
        setRecord(updatedRecord);
    };

    return (
        <div className="p-5">
            <h4>Todo Task</h4>
            <div className="mb-3">
                <input type="text" name="name" value={data.name} className="form-control-sm" onChange={handleChange} />
            </div>
            <input type="button" value="Add" onClick={handleClick} className="btn btn-primary" />
            {record.map((task, j) => (
                <div className="d-flex  mb-3 mt-3 " key={j}>
                    <div onClick={() => handleDel(j)} className="col-8">
                        <h4>
                            {j + 1}. {task.name}
                        </h4>
                    </div>
                    <div className="col-4" onClick={() => handleToggle(j)}>
                        <input type="button" className={task.value === "Assign" ? "btn btn-primary" : "btn btn-success"} value={task.value} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default App;
