import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";



function Loade() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    let navigate = useNavigate();

    const onBack = () => {
        navigate('/')
    };
  
    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {
      fetch("https://kinotop.webtop.us/api/movies")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Ошибка: {error.message} 
                <button onClick={onBack}>back</button>
             </div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div>
          <button onClick={onBack}>back</button>
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  {item.date.backdrop}
                </li>
              ))}
            </ul>
        </div>
        
      );
    }
}

export {Loade};