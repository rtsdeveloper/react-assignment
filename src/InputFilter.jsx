import React, { useState } from "react";

const InputFilter = ({ record}) => {
    const [filterdata, setFilterdata] = useState([])

    const handleFilter = () => {
        // const filteredRecords = record.filter(data =>
        //     filterdata.name.toLowerCase().includes(filterdata.name.toLowerCase())
        // );
        // console.log(filteredRecords);
    };

    return (
        <>
            {/* <input
                type="button"
                value="Filter"
                onClick={handleFilter}
                className="btn btn-primary"
            /> */}
        </>
    );
};

export default InputFilter;
