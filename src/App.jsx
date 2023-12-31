import React, { Component } from "react";
import InputSave from "./InputSave";
import InputShow from "./InputShow";
import Result from "./Result";
import FilterData from "./FilterData";

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            data: { name: "", value: "Assign" },
            record: [],
            edit: null,
            filterData: []
        };
    }

    render() {

        const { data, record, edit, filterData } = this.state;

        return (
            <div className="row">
                <h2>Todo Task</h2>
                <div>
                    <label className="m-2">
                        <InputSave
                            data={data}
                            setData={this.setData}
                            record={record}
                            setRecord={this.setRecord}
                            filterData={filterData}
                            setFilter={this.setFilter}
                        />
                    </label>
                    <label>
                        <InputShow
                            data={data}
                            setData={this.setData}
                            record={record}
                            setRecord={this.setRecord}
                        />
                    </label>
                </div>
                <div>
                    <Result
                        data={data}
                        setData={this.setData}
                        edit={edit}
                        setEdit={this.setEdit}
                        record={record}
                        setRecord={this.setRecord}
                    />
                </div>
                <div>
                    <FilterData
                        data={data}
                        setData={this.setData}
                        edit={edit}
                        setEdit={this.setEdit}
                        record={record}
                        setRecord={this.setRecord}
                        filterData={filterData}
                        setFilter={this.setFilter}
                    />
                </div>
            </div>
        );
    }

    setData = (newData) => {
        this.setState({ data: newData });
    };

    setRecord = (newRecord) => {
        this.setState({ record: newRecord });
    };

    setEdit = (newEdit) => {
        this.setState({ edit: newEdit });
    };

    setFilter = (newfilterData) => {
        this.setState({ filterData: newfilterData });
    };
}

export default App;
