import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../assets/image1.png'

function Hero() {
    return (
        <div className='w-full flex flex-col-reverse md:flex-row justify-between items-center py-10'>
            <div className='italic py-5 md:pl-[10%]'>
                <div className="text-2xl font-bold">Know your <br></br>Helmet</div>
                <div className='mt-4'>Find your perfect helmet today <br></br>in HELMETCO</div>
                <Link to="/question">
                    <button className='p-3 mt-4 italic font-bold bg-[#ff9200]'>Start Now</button>
                </Link>
            </div>
            <img src={image1} alt="" className='max-w-[80%] self-end' />
        </div>
    )
}

export default Hero