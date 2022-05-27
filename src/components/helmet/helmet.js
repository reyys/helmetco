import React from 'react'
import dataHelmet from '../../helmet.js'
import { useParams } from 'react-router-dom'
import copyIcon from '../../assets/copy.png'
import { CopyToClipboard } from 'react-copy-to-clipboard'


function Helmet() {
    const { id } = useParams()
    const [coped, setCopied] = React.useState(false)
    const [helmet, setHelmet] = React.useState(dataHelmet[id])

    const addOpacity = () => {
        const clipBoard = document.querySelector('.clipboard')
        clipBoard.classList.add('opacity')
        setTimeout(() => {
            clipBoard.classList.remove('opacity')
        }, 500)
    }

    const renderHelmet = () => {
        return (
            <div className='italic flex flex-col-reverse md:flex-row py-36 justify-center gap-[200px] w-full items-center'>
                <div>
                    <div className="font-bold text-2xl">Your helmet are...</div>
                    <div className='font-bold text-4xl'>{helmet.image}</div>
                    <div className='font-medium mt-12'>Claim your <span className='font-bold'>20% discount</span><br></br>with this promo code</div>
                    <CopyToClipboard text={helmet.promo} onCopy={() => addOpacity()}>
                        <button id="copytoclip" className='button-copy flex relative justify-center items-center font-bold py-5 w-full mt-12 bg-[#ff9200] uppercase hover:scale-y-110 transition-all'>
                            <span>{helmet.promo}</span>
                            <img className='ml-[15px] max-w-[30px]' src={copyIcon} alt="copy" />
                            <span className='clipboard transition-all absolute right-[-50px] top-[-30px] p-3 rounded-lg bg-black text-white'>Copied</span>
                        </button>
                    </CopyToClipboard>
                </div>
                <img className="max-w-[300px]" src={helmet.imageurl} alt="" />
            </div>
        )
    }



    return (
        renderHelmet()
    )
}


export default Helmet