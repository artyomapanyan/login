
import {Link, useNavigate, useParams} from "react-router-dom";
import "./Loade.css";
import {Form} from 'antd';
import React, { useEffect, useState } from 'react';



function Loade({ index, ...props }) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [link, setLink] = useState([]);
    const [page, setPage] = useState('1');
    const [serch, setSerch] = useState("");
    const [callSerch, setCallSerch] = useState("");
    const [num, setNum] = useState(3);



    const [form] = Form.useForm();

    let navigate = useNavigate();
    let {id} = useParams();

    const onBack = () => {
        navigate('/')
    };

    const onPage = (currentPage) => {
        setIsLoaded(false);
        setPage(currentPage)
        fetch( `https://kinotop.webtop.us/api/movies?page=${currentPage}&${serch}=${callSerch}`)
            .then(res => res.json())
            .then((result) => {
               console.log(result)//patasxan
                    setLink(result.links.filter((el) => Number.isInteger(+el.label)))
                    setIsLoaded(true);
                    setItems(result.data);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }

    const nextPage = () => {
        onPage((+page)+1)
    }

    useEffect(() => {
        onPage(page)
    }, []);

    const onRefresh = () => {
        onPage(page)
    }
    const onSearch = (e) => {
        setSerch(e.target.value)
    }

    const onDelete = (item) => {
        setInterval(() => {
            setItems((prevState) => prevState.filter((el, i) => {
                return i !== 0
            }))
        }, 1000)

    }
    function onSlashLink(e) {
        setCallSerch(e.target.value);
    }



    const nextBtn = () => {
        setNum(num+10)

    }


    return error ?
        <div>Ошибка: {error.message}
            <button onClick={onBack}>back</button>
        </div>
        : !isLoaded ?
            <div>Загрузка...</div> :
            <div>
                <button onClick={onBack}>back</button>
                <button onClick={onRefresh}>refresh</button>
                <input type="text" value={serch} onChange={onSearch}/>
                <input type="text" value={callSerch} onChange={onSlashLink}/>
                <button onClick={nextPage} >go next page</button>
                <button onClick={onPage}>aaa</button>
                <ul>
                    {
                        items.slice(0, num).map(item => {
                            return (

                                <li key={item.id}>

                                    <Link to={`/film/${item.id}`}>{item.title_en}</Link>

                                    {item.genres?.map((gen, ind) => {
                                        return (
                                            "(" + gen.name + ")" + (ind === item.genres.length - 1 ? "" : ",")

                                        )
                                    })
                                    }
                                    <button onClick={() => onDelete(item)}>x</button>
                                    {item.sources?.map((sours) => {

                                        return (
                                            <div key={sours.id}>
                                                {sours.translator}
                                            </div>
                                        )
                                    })
                                    }
                                    {item.countries?.map((countri) => {
                                        return (<div key={countri.id}>
                                            {countri.name}
                                        </div>)
                                    })}
                                </li>
                            )
                        })


                    }

                </ul>
                <div>
                    {num <= items.length ? <button onClick={nextBtn} className="buttonNext" >next...</button> : null}
                </div>

                {link.map((li, key) => (
                    <div key={key} className="pageButton">
                        {page === li.label ? li.label : <button onClick={() => onPage(li.label)}>{li.label}</button>}

                    </div>
                ))}


            </div>;


}

export {Loade};