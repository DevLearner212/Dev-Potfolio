import React from 'react'

export default function Footer() {
    return (
        <div className="w-screen flex flex-col h-60 sm:h-96 md:h-[30rem]  ">
            <hr className='w-32 mx-auto mb-2' />
            <h1 className='text-center text-white text-xl py-1 xl:py-10 2xl:py-10 lg:py-10 md:py-5 sm:text-[4vw] md:text-[5vw]'>Dev K. Saini</h1>
            <div className="footercontainer  relative flex flex-col justify-end items-center    h-[80%]">
                <div className="div absolute bottom-5 sm:bottom-14   flex flex-col items-center justify-end h-40 sm:h-56 md:h-72 md:w-[60vw]  w-[50vw]">
                    <img className='w-5 sm:w-7 md:w-8 relative   right-3 top-9' src="https://img.icons8.com/?size=80&id=9Gfx4Dfxl0JK&format=png" alt="" />
                    <img className='w-5 sm:w-7 md:w-8 relative left-3 top-8' src="https://img.icons8.com/?size=48&id=bosfpvRzNOG8&format=png" alt="" />
                    <img className='w-5 sm:w-7 md:w-8 relative right-3 top-7' src="https://img.icons8.com/?size=80&id=igYV9I849M8k&format=png" alt="" />
                    <img className='w-5 sm:w-7 md:w-8 relative left-3 top-6' src="https://img.icons8.com/?size=48&id=hsPbhkOH4FMe&format=png" alt="" />
                    <img className='w-5 sm:w-7 md:w-8 relative  right-3 top-5' src="https://img.icons8.com/?size=48&id=jD-fJzVguBmw&format=png" alt="" />
                    <img className='w-5 sm:w-7 md:w-8 relative  left-3 top-4 ' src="https://img.icons8.com/?size=80&id=8g6WJkjf0vaP&format=png" alt="" />
                    <img className='w-5 sm:w-7 md:w-8 relative   right-3 top-3 ' src="https://img.icons8.com/?size=48&id=108784&format=png" alt="" />
                    <img className='w-5 sm:w-7 md:w-8 relative   left-3 top-2' src="https://img.icons8.com/?size=48&id=21278&format=png" alt="" />
                    <img className='w-5 sm:w-7 md:w-8 relative  sm:top-1' src="https://img.icons8.com/?size=48&id=20909&format=png" alt="" />
                </div>
                <img className='w-5 sm:w-14' src="spellbook.png" alt="" />


            </div>
            <p className='text-white text-[10px] sm:text-[12px] text-center mt-2'>DevSaini-Portfolio@2024</p>
        </div>

    )
}
