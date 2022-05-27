import React from 'react'
import Hero from './components/hero'
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <div className='w-full text-2xl h-auto py-5 font-bold italic flex justify-center'>HELMET<span style={{ color: "#ff9200" }}>CO</span></div>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path='/question' />
            </Routes>
        </div>
    )
}

export default App