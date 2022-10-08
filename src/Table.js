import React, {useState} from "react";
import {Button} from "antd";

function Table() {
    const [data,setData] = useState([
        {
            name:'test',
            lastname:'valod'
        },
        {
            name:'vlod',
            lastname:'karen'
        },
        {
            name:'horom',
            lastname:'esimicnh'
        },
        {
            name:'vardan',
            lastname:'rustam'
        },

    ])
    const [search, setSearch] = useState('');
    const [searchLastName, setSearchLastName] = useState('')
    const [isUpdate, setIsUpdate] = useState(false)


   const onSearch = (e, isUpdate) => {
       setSearch(e.target.value );
       if(isUpdate){
           setData(data.map((el, ind) => {
               if(isUpdate == ind) {
                   el.name = search
               }
               return el;
           }))
       }

    }

    const onSearch1 = (e) => {
        setSearchLastName(e.target.value)
    }

    const hendlApdate = (el) => {
        setSearchLastName(el.lastname);
        setSearch(el.name)
        setIsUpdate(true)

    }




    return <div>
        <input type="text" value={search}  onChange={onSearch} />
        <input type="text" value={searchLastName}  onChange={onSearch1} />
        {isUpdate ? <button>add</button> : ""}
        {
            data.filter((el) => {
                return el.lastname.includes(searchLastName) && el.name.includes(search);
            }).map((el, i) => {
                return <div style={{border:'1px solid'}} key={i}>
                    <div>
                        <p>anun  -  {el.name}</p>
                        <p>azganun  -  {el.lastname}</p>
                    </div>
                    <button onClick={()=>hendlApdate(el)}>{isUpdate ? "change" : "apdate" }</button>
                </div>
            })
        }


    </div>
}

export {Table};