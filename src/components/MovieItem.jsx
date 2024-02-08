import { useContext } from "react"
import { movieContext } from "../Context/movieContext"

export default function MovieItem({ data }) {

    const { detailHandler, romanize } = useContext(movieContext)

    


    return (
        <div
            onClick={() => detailHandler(data)}
            className="w-full cursor-pointer border-b-2"
        >
            <div 
                className='flex py-2 px-4 gap-8'
            >
                <p className=' text-gray-600 whitespace-nowrap'>Episode {data.episode_id}</p>
                <div className='w-full flex justify-between'>
                    <div className='flex gap-4'>
                        <h3 className='font-medium text-gray-700'>
                            Episode {romanize(data.episode_id)}
                        </h3>
                        <h3 className='font-medium text-gray-700'>{data.title}</h3>
                    </div>
                    <h3 className='text-gray-600'>{data.release_date}</h3>
                </div>
            </div>

        </div>
    )
}