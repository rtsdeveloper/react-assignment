import React, { Component } from "react";

class InputFilter extends Component {
    handleFilter = () => {
        const { record, data, filterData, setFilter } = this.props;

        const filteredRecords = record.filter(recordItem =>
            recordItem.name.toLowerCase().includes(data.name.toLowerCase())
        );
        setFilter(filteredRecords);
        console.log(filterData);
    };

    render() {
        return (
            <>
                <input
                    type="button"
                    value="Filter"
                    onClick={this.handleFilter}
                    className="btn btn-primary"
                />
            </>
        );
    }
}

export default InputFilter;
