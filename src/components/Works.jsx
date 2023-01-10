import React from 'react'
import groceries from "../assets/portfolio/01.jpg"
import crime from "../assets/portfolio/crime.jpg"
import portfolio from "../assets/portfolio/portfolio.jpg"

const Works = () => {

    const works = [
        {
            id: 1,
            src: groceries,
            link: "https://github.com/carlos-lopez98/E-Groceries",
            title: "E-Groceries"
        },
        {
            id: 2,
            src: crime,
            link: "https://github.com/carlos-lopez98",
            title: "Crime Watchers"
        },
        {
            id: 3,
            src: portfolio,
            link: "https://github.com/carlos-lopez98/WebPro",
            title: "Portfolio Site"
        }
    ]


    return (
        <div name="works" className="bg-gradient-to-b from-black to-gray-800 w-full text-white
        md:h-screen">
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Works
                    </p>
                    <p className="py-6">Preview into some of my Projects</p>
                </div>




                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        works.map(({ id, src, link, title }) => (

                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 ' />
                                <div className='flex items-center justify-center'>
                                    <h1>{title}</h1>
                                    <a href={link} className='w-1/2 px-2 py-3 m-4 duration-200 hover:scale-105'>View the Code</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Works
