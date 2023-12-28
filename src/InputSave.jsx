import React, { Component } from "react";

class InputSave extends Component {
    handleChange = (e) => {
        const { data, setData } = this.props;
        setData({ ...data, [e.target.name]: e.target.value });
    };

    handleFilter = (e) => {
        const { filterData, setFilter, record } = this.props;
        const updatedFilterData = { ...filterData, [e.target.name]: e.target.value };
        setFilter(updatedFilterData);

        const filteredRecords = record.filter(recordItem =>
            recordItem.name.toLowerCase().includes(updatedFilterData.name.toLowerCase())
        );
        setFilter(filteredRecords);
        //console.log(filterData);
    };

    handleCombine = (e) => {
        this.handleChange(e);
        this.handleFilter(e);
    };

    render() {
        const { data } = this.props;

        return (
            <>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    className="form-control-sm"
                    onChange={this.handleCombine}
                />
            </>
        );
    }
}

export default InputSave;
