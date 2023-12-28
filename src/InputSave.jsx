import React, { Component } from "react";

class InputSave extends Component {
    handleChange = (e) => {
        const { data, setData } = this.props;
        setData({ ...data, [e.target.name]: e.target.value });
    };

    render() {
        const { data } = this.props;

        return (
            <>
                <input
                    data={data}
                    setData={this.setData}
                    type="text"
                    name="name"
                    value={data.name}
                    className="form-control-sm"
                    onChange={this.handleChange}
                />
            </>
        );
    }
}

export default InputSave;
