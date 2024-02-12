import { useContext, useEffect, useState } from 'react'
import './App.css'
import { movieContext } from './Context/movieContext'
import MovieItem from './components/MovieItem'
import MovieDetails from './components/MovieDetails'
import SearchBar from './components/searchBar'


function App() {

  const { data } = useContext(movieContext)
  const [search, setSearch] = useState("")

  return (
    <div className='relative z-10'>

      <SearchBar search={search} setSearch={setSearch} />

      <div className='flex w-full h-screen'>

        <div className='w-1/2 h-full flex justify-center items-center'>
          {
            data.length > 0 ?
              <div className='h-full w-full'>
                {
                  data.filter((item) => {
                    return (search.toLowerCase() === "" ? item : item.title.toLowerCase().includes(search.toLowerCase()))
                  }).map((item) => {
                    return (
                      <MovieItem data={item} key={item.episode_id} />
                    )
                  })
                }
              </div> :
              <div className="custom-loader"></div>
          }
        </div>

        <div className='w-1/2 border-l-2'>
          <MovieDetails  search={search}/>
        </div>

      </div>
    </div>
  )
}

export default App
