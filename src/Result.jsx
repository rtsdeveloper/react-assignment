import React from 'react'

const Result = ({data,setData,edit,setEdit,record,setRecord}) => {

    const handleCheckbox = (index) => {
        const updatedRecord = [...record];
        updatedRecord[index].value = updatedRecord[index].value === "Assign" ? "Completed" : "Assign";
        setRecord(updatedRecord);
    };

    const handleEdit = (data) => {
        setEdit(data);
        setData(record[data]);
    };

    const handleEditConfirmation = () => {
        const updatedRecord = [...record];
        updatedRecord[edit] = data;
        setRecord(updatedRecord);
        setEdit(null);
        setData({ name: "", value: "Assign" });
    };

    const handleDel = (data, index) => {
        const deleteFilter = record.filter((_, i) => i !== index);
        setRecord(deleteFilter);
        setData({ name: "", value: "Assign" });
    };

    return (
        <>
        {record.map((task, index) => (
        <div className="row mb-3 mt-3" key={index}>
            <div className="col-6">
                <span>
                    <input
                        style={{ cursor: "pointer" }}
                        type="checkbox"
                        className="form-check-input me-2"
                        onClick={() => handleCheckbox(index)}
                    />
                    <span className="h5">{index + 1} . </span>{" "}
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
            <div className="col-6 d-flex">
                <div className="col-4">
                    <span className="h5">Status : </span>
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
                <div className="col-4 text-center">
                    {edit === index ? (
                        <i
                            onClick={handleEditConfirmation}
                            className="fa-regular fa-check-square"
                            style={{
                                cursor: "pointer",
                                fontSize: "25px",
                                color: "green"
                            }}
                        ></i>
                    ) : (
                        <i
                            onClick={() => handleEdit(index)}
                            className="fa-regular fa-pen-to-square"
                            style={{
                                cursor: "pointer",
                                fontSize: "25px",
                                color: "blue"
                            }}
                        ></i>
                    )}
                </div>
                <div
                    className="col-4 d-flex justify-content-center align-items-center"
                    onClick={() => handleDel(data, index)}
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
        </>
    )
}

export default Result
