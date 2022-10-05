import {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";


function Loade() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [link, setLink] = useState([]);
    const [page, setPage] = useState('1');
    const [serch, setSerch] = useState("")




    let navigate = useNavigate();
    let { id } = useParams();

    const onBack = () => {
        navigate('/')
    };

    const onPage = (currentPage) => {
        setIsLoaded(false);
        setPage(currentPage)
        fetch(`https://kinotop.webtop.us/api/movies?page=${currentPage}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setLink(result.links.filter(function(el) {
                        if (Number.isInteger(+el.label)) {
                            return el.label
                        }
                    }))
                    setIsLoaded(true);
                    setItems(result.data);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

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

                <ul>
                    {
                        items.filter((el) => {
                            return el.genres.find((fnd )=> {
                               return fnd.name.toLowerCase().includes(serch.toLowerCase())
                            }) || el.title_en.toLowerCase().includes(serch.toLowerCase())

                        }).map(item => {
                            console.log(item,'item')
                            return (
                                <li key={item.id}>

                                    <Link to={`/film/${item.id}`} >{item.title_en}</Link>


                                    {item.genres.map((gen, ind) =>{
                                        //    console.log(gen,'gen')
                                        return (
                                            "(" + gen.name + ")" + (ind === item.genres.length-1 ? "": ",")

                                        )
                                    })
                                    }

                                    {item.sources.map((sours) =>{

                                        return (
                                            <div>
                                                {sours.translator}
                                            </div>
                                        )
                                    })
                                    }
                                    {item.countries.map((countri)=> {
                                        return (<div>
                                            {countri.name}
                                        </div>)
                                    })}



                                </li>

                            )
                        })

                    }
                </ul>
                {link.map((li,key) => (
                    <div key={key}>
                        {page === li.label ? li.label : <button onClick={()=>onPage(li.label)}>{li.label}</button>}

                    </div>
                ))}



            </div>;


}

export {Loade};