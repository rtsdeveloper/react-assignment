import React, { useState } from "react";
import InputSave from "./InputSave";
import InputShow from "./InputShow";
import Result from "./Result";
import InputFilter from "./InputFilter";

const App = () => {

    const [data, setData] = useState({ name: "", value: "Assign" });
    const [record, setRecord] = useState([]);
    const [edit, setEdit] = useState(null);

    return (
        <div action="#" className="p-5">
            <h4>Todo Task</h4>
            <div>
                <label>
                    <InputSave data={data} setData={setData} record={record} setRecord={setRecord} />
                </label>
                <label className="ms-3" >
                    <InputShow data={data} setData={setData} record={record} setRecord={setRecord} />
                </label>
                <label className="ms-3" >
                    <InputFilter data={data} setData={setData} record={record} setRecord={setRecord} />
                </label>
            </div>
            <div>
                <Result data={data} setData={setData} edit={edit} setEdit={setEdit} record={record} setRecord={setRecord} />
            </div>
        </div>
    );
};

export default App;