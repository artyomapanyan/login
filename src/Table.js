import React, {useState} from "react";

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


   const onSearch = (e, index) => {
        index === "name" ? setSearch(e.target.value ): setSearchLastName(e.target.value);
       if(isUpdate !== false){
           setData(data.map((el, ind) => {
               if(isUpdate === ind) {
                   el[index] = e.target.value
               }
               return el;
           }))
       }

    }

    const hendlApdate = (el, i) => {
        setSearchLastName(el.lastname);
        setSearch(el.name)
        setIsUpdate(i)

    }

    const onUpdate = (e) => {
        setSearchLastName("");
        setSearch("");
        setIsUpdate(false)
        }




    return <div>
        <input type="text" value={search}  onChange={(e)=>onSearch(e, "name")} />
        <input type="text" value={searchLastName}  onChange={(e)=>onSearch(e, "lastname")} />
        {isUpdate !== false ? <button onClick={onUpdate}>update</button> : ""}
        {
            data.filter((el) => {
                return el.lastname.includes(searchLastName) && el.name.includes(search);
            }).map((el, i) => {
                return <div style={{border:'1px solid'}} key={i}>
                    <div>
                        <p>anun  -  {el.name}</p>
                        <p>azganun  -  {el.lastname}</p>
                    </div>
                    <button onClick={()=>hendlApdate(el, i)}>change</button>
                </div>
            })
        }


    </div>
}

export {Table};