import React from 'react'
import { CgArrowRightR } from 'react-icons/cg'
import { Link } from "react-scroll"

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        Hello_ <br /> I am a Software Engineer
                    </h2>
                    <h1 className='text-white font-bold text-2xl mt-6'>@cjimenez9811@gmail.com</h1>
                    <p className='text-gray-500 py-4 max-w-md'>
                    </p>

                    <div>
                        <Link to="works" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500
                         to-blue-500 cursor-pointer hover:scale-110 duration-300">
                            Works
                            <span className="group-hover:rotate-90 duration-500"><CgArrowRightR size={20} className="ml-1" /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home
