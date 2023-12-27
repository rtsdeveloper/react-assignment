import React, { useState } from "react";
import InputAdd from "./InputAdd";
import InputShow from "./InputShow";
import Result from "./Result";

const App = () => {

    const [data, setData] = useState({ name: "", value: "Assign" });
    const [record, setRecord] = useState([]);
    const [edit, setEdit] = useState(null);

    return (
        <form action="#" className="p-5">
            <h4>Todo Task</h4>
            <label>
                <InputAdd data={data} setData={setData} record={record} setRecord={setRecord} />
            </label>
            <label className="ms-3" >
                <InputShow data={data} setData={setData} record={record} setRecord={setRecord} />
            </label>
            <div>
                <Result data={data} setData={setData} edit={edit} setEdit={setEdit} record={record} setRecord={setRecord} />
            </div>
        </form>
    );
};

export default App;