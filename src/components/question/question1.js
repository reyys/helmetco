import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../../data';

function Question1() {
    // let navigate = useNavigate()

    const { id } = useParams();
    const [state, setState] = React.useState(data[id])



    return (
        <div className='italic question px-12 md:px-32 lg:px-64 flex flex-col w-full text-2xl justify-center h-screen'>
            <div className='font-bold text-center w-full'>{state.question}</div>
            <div className='flex mt-12 justify-center items-center flex-col md:flex-row gap-[20px]'>
                <Link className="p-10 border-black border-[1px]" reloadDocument to={state.targeta}>{state.a}</Link>
                <Link className="p-10 border-black border-[1px]" reloadDocument to={state.targetb}>{state.b}</Link>

            </div>
        </div>
    )
}

export default Question1