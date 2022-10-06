import React, {useState} from "react";
import {Button} from "antd";

function Table() {
    const [table, setTable] = useState([{
        name:'vardan',
        lastName:'mamikonyan'
    }]);

    const onAddRow = () => {
        setTable([
            ...table,
            {name: "",
            lastName: ""}
        ])
    }

    const changed = (e,index,key) => {

        //table[ind] = (e.target.value);
        // setTable([...table]);
        // setTimeout(() => { document.getElementById('input-'+ind).focus()});
        let newTable = table.slice(0).map((el, i) => {
            if(index === i) {
                el[key] = e.target.value;
            }
            return el;
        })
       setTable(newTable)
    }

    const onDelete =(index) => {
        setTable(table.filter((el, i) =>index !== i)
        )
    }

    return <div>
        {table.map((ta, index) =>
            <div key={index}>
                {ta.name} <input type="text" value={ta.name} onChange={(e)=>changed(e, index, "name")} />
                {ta.lastName} <input type="text" value={ta.lastName} onChange={(e)=>changed(e, index, "lastName")} />
                <button onClick={()=>onDelete(index)}>x</button>
            </div>)}
        <button onClick={onAddRow}>update</button>
    </div>

}

export {Table};