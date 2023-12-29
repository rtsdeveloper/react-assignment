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

    handleDeleteall = () => {
        const { data, setData, record, setRecord } = this.props;
        setRecord([]);
        setData({ name: "", value: "Assign" });
    }

    handleSelected = () => {
        const { data, setData, record, setRecord } = this.props;
        const filtereSelected = record.filter(item => item.value === 'Assign');
        console.log(filtereSelected);
        setRecord(filtereSelected);
        console.log(record);
    }

    render() {
        return (
            <>
                <input
                    type="button"
                    value="Add"
                    onClick={this.handleClick}
                    className="btn btn-primary"
                />
                <input
                    type="button"
                    value="Reset"
                    onClick={this.handleDeleteall}
                    className="btn btn-primary ms-2"
                />
                <input
                    type="button"
                    value="Delete Selected"
                    onClick={this.handleSelected}
                    className="btn btn-primary ms-2"
                />
            </>
        );
    }
}

export default InputShow;
