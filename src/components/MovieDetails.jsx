import { useContext } from "react";
import { movieContext } from "../Context/movieContext";

function MovieDetails() {

    const {details, romanize} = useContext(movieContext)

    return ( 
        <div className="h-screen p-4">
            {
                details === null ?
                <div className="h-full flex justify-center items-center">
                    No  movies selected
                </div> :
                <div>
                    <div className="flex flex-col gap-4">
                        <span className="text-3xl">{`Episode ${romanize(details.episode_id)} - ${details.title}`}</span>
                        <p>{details.opening_crawl}</p>
                        <span>{`Directed By - ${details.director}`}</span>
                    </div>
                </div>
            }
        </div>
     );
}

export default MovieDetails;