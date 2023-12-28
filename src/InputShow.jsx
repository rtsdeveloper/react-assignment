import React, { Component } from "react";

class InputShow extends Component {
    
    handleClick = (e) => {
        e.preventDefault();
        const { data, setData, record, setRecord } = this.props;

        if (data.name.trim() === "") {
            alert("Kindly Fill Task in it.");
        } else {
            let rcds = [...record, { ...data }];
            setRecord(rcds);
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
