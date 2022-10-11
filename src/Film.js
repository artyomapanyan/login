import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
function  Film() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState({});

    let { id } = useParams();

    useEffect(() => {
        fetch(`https://kinotop.webtop.us/api/movies/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)

                    setIsLoaded(true);
                    setItem(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

    }, []);




    return (
     isLoaded? <div>
          {item.description}
          {item.crews.map(crew=><div key={crew.id}>
              {crew.job}-{crew.name}
              <img src={`https://image.tmdb.org/t/p/w500/${crew.profile_path}`} />

          </div>)}
         {item.trailers.map(trailer=><div key={trailer.id}>
             {trailer.id.videoId}
         </div> )}
      </div>:<div>Loading</div>
    );
}

export {Film};