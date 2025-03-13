import React from 'react'

export default function Contact() {
    return (
        <div className="contact container w-[100vw] hidden 2xl:flex h-[100%]" >
            <div className="left w-1/2 flex justify-center h-full ">
                <img className='w-[30rem] h-[30rem]' src="https://png.pngtree.com/png-clipart/20231104/original/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_13504468.png" alt="" />

            </div>
            <div className="right w-1/2 flex flex-col h-full p-5">
                <h1 className='text-7xl text-white '>Contact Me</h1>
                <div className="form w-full flex flex-col h-[50vh] leading-10 ">
                    <label htmlFor="Name" className='text-white'>Name</label>
                    <input type="text" className=' bg-transparent outline-none text-white w-1/2 px-5 border-2 border-t-0 border-l-0 border-r-0' />
                    <label htmlFor="Email" className='text-white'>Email</label>
                    <input type="text" className=' bg-transparent outline-none text-white w-1/2 border-2 px-5 border-t-0 border-l-0 border-r-0' />
                    <label htmlFor="Email" className='text-white'>Message</label>
                    <textarea name="" className='bg-transparent outline-none text-white w-1/2 px-5 border-2 border-t-0 border-l-0 border-r-0' id=""></textarea>
                    <button className='border-2 w-1/4 ml-20 rounded-full mt-10 text-white'>Contact us</button>
                </div>
            </div>
        </div>

    )
}
