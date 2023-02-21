import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import HeroImage from "../assets/heroImage.png"
import {Link} from "react-scroll";


const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">Im a Developer</h2>
                <p className="text-gray-500 py-4 max-w-md">
                Versatile Software Developer equally comfortable creating solutions for on-premise or cloud-based deployments. Exploits Agile development methodologies to rapidly iterate and improve products. Consistent provider of useful and actionable input on all projects.
                </p>
                <div>
                    <Link to="portfolio" smooth duartion={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml=1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div><img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full ml-5" /></div>
        </div>
    </div>
  )
}

export default Home