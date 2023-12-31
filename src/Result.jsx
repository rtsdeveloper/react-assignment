import React, { Component } from 'react';

class Result extends Component {

    handleCheckbox = (index) => {
        const { record, setRecord } = this.props;
        const updatedRecord = [...record];
        updatedRecord[index].value = updatedRecord[index].value === 'Assign' ? 'Completed' : 'Assign';
        setRecord(updatedRecord);
        console.log(updatedRecord);
    };

    handleEdit = (index) => {
        const { setEdit, setData, record } = this.props;
        setEdit(index);
        setData(record[index]);
    };

    handleEditConfirmation = () => {
        const { edit, setRecord, setData, data } = this.props;
        const { record } = this.props;
        const updatedRecord = [...record];
        updatedRecord[edit] = data;
        setRecord(updatedRecord);
        setEdit(null);
        setData({ name: '', value: 'Assign' });
    };

    handleDel = (index) => {
        const { record, setRecord, setData } = this.props;
        const deleteFilter = record.filter((_, i) => i !== index);
        setRecord(deleteFilter);
        setData({ name: '', value: 'Assign' });
    };

    render() {
        const { record, edit, data } = this.props;

        return (
            <>
                <h4 className='mt-5' >1. Task List</h4>
                {record.map((task, index) => (
                    <ul className="d-flex justify-content-between" style={{ listStyle: "none" }} key={index}>
                        <li>
                            <input
                                style={{ cursor: 'pointer' }}
                                type="checkbox"
                                checked={task.value === 'Completed'}
                                className="form-check-input me-2"
                                onClick={() => this.handleCheckbox(index)}
                            />
                            <span className="h5">{index + 1}. </span>{' '}
                        </li>
                        <li
                            className={
                                task.value === 'Assign'
                                    ? 'h5'
                                    : 'text-danger text-decoration-line-through h5'
                            }
                        >
                            {task.name}
                        </li>
                        <li
                            className={
                                task.value === 'Assign' ? 'badge bg-primary' : 'badge bg-success'
                            }
                        >
                            {task.value === 'Assign' ? 'New' : 'Completed'}
                        </li>
                        <li>
                            {edit === index ? (
                                <i
                                    onClick={this.handleEditConfirmation}
                                    className="fa-regular fa-check-square"
                                    style={{
                                        cursor: 'pointer',
                                        fontSize: '25px',
                                        color: 'green',
                                    }}
                                ></i>
                            ) : (
                                <i
                                    onClick={() => this.handleEdit(index)}
                                    className="fa-regular fa-pen-to-square"
                                    style={{
                                        cursor: 'pointer',
                                        fontSize: '25px',
                                        color: 'blue',
                                    }}
                                ></i>
                            )}
                        </li>
                        <li
                            onClick={() => this.handleDel(index)}
                        >
                            <i
                                style={{
                                    cursor: 'pointer',
                                    fontSize: '25px',
                                    color: 'red',
                                }}
                                className="fa-solid fa-trash-can"
                            ></i>
                        </li>
                    </ul>
                ))}
            </>
        );
    }
}

export default Result;
