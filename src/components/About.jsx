import React from 'react'

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline bor5der-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>

                    I am Carlos, a Software Engineer able to build a web applications from the ground up, from system design,
                    webpage navigation
                    , database integration and back-end programming to UX/ UI.I have recently graduated from a rigourous one year coding institution, with an
                    emphasis on back-end Java Development (Kenzie Academy). I am now skilled in Front-End Technologies such as HTML, CSS, JavaScript, React, BootStrap
                    and Back-End Technologies such as Spring Boot, Node.js and AWS Database/ Serverless Deployments. Learning new languages and multimedia tools is one of
                    my strengths.
                </p>

                <br />

                <p className='text-xl'>

                    I am looking for a challenging opportunity that will let me use my skills and abilities to achieve a challenging goal, learning new skills
                    and toolsets along the way.

                </p>

            </div>
        </div>
    )
}

export default About
