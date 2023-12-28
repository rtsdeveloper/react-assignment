import React, { Component } from "react";

class InputShow extends Component {

    handleClick = (e) => {
        e.preventDefault();
        const { data, setData, record, setRecord } = this.props;

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
            setData({ name: "", value: "Assign" });
        }
    };

    render() {
        return (
            <>
                <input
                    type="button"
                    value="Add"
                    onClick={this.handleClick}
                    className="btn btn-primary"
                />
            </>
        );
    }
}

export default InputShow;
