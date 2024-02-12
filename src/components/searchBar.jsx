import { useContext } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { movieContext } from "../Context/movieContext";
import { RxCross1 } from "react-icons/rx";

function SearchBar({ search, setSearch }) {

    const { sortHandler, sortFlag, setSortFlag, showHandler } = useContext(movieContext)


    return (
        <div className='border-b-2'>
            <form
                className='flex py-3 gap-3 px-3'
                onSubmit={(e) => {
                    e.preventDefault()
                    setSortFlag((prev) => !prev)
                }}
            >
                <button className='w-1/12 border-2 rounded-lg py-2 hover:border-blue-600 hover:text-blue-600'>Sort By..</button>
                {
                    sortFlag &&
                    (
                        <div className={`absolute top-16 w-60 bg-white border-2 shadow-md`}>
                            <div className='flex w-full items-center justify-between px-2'>
                                <h2 className='w-full py-3 border-b-2'>Sort By:</h2>
                                <RxCross1 className='cursor-pointer hover:text-red-700 text-lg font-bold hover:bg-slate-300 rounded-full' onClick={() => setSortFlag((prev) => !prev)} />
                            </div>
                            <div className='py-2 px-4 border-b-2 cursor-pointer focus-visible:bg-slate-600 hover:bg-slate-300' onClick={() => sortHandler("year")}>Year</div>
                            <div className='py-2 px-4 border-b-2 cursor-pointer focus-visible:bg-slate-600 hover:bg-slate-300' onClick={() => sortHandler("episode")}>Episode</div>
                        </div>
                    )
                }
                <div className='flex items-center px-2 w-full border-2 rounded-lg '>
                    <IoSearchOutline className='text-xl text-gray-500' />
                    <input
                        type='text'
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                            showHandler()
                            }}
                        className=' w-full py-3 px-2 outline-none'
                        placeholder='Type to search...'
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;