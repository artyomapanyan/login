import {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";


function Loade() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [link, setLink] = useState([]);


    let navigate = useNavigate();
    let { id } = useParams();

    const onBack = () => {
        navigate('/')
    };

    const onPage = (page) => {
        setIsLoaded(false);
        fetch(`https://kinotop.webtop.us/api/movies?page=${page}`)
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
        fetch("https://kinotop.webtop.us/api/movies?page=50")
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
    }, []);




    return error ?
        <div>Ошибка: {error.message}
            <button onClick={onBack}>back</button>
        </div>
        : !isLoaded ?
            <div>Загрузка...</div> :
            <div>
                <button onClick={()=>onBack}>back</button>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <Link to={`/film/${item.id}`} >{item.title_en}</Link>
                        </li>
                    ))}
                </ul>

                {link.map((li,key) => (
                    <div key={key}>
                        <button onClick={()=>onPage(li.label)}>{li.label}</button>
                    </div>
                ))}

            </div>;


}

export {Loade};