import React from 'react'
import { useNavigate } from 'react-router'

export default function Contact() {
    const navigate = useNavigate()
    return (
        <div className="contact container w-[100vw] hidden 2xl:flex h-[100%]" >
               <div className="container2 relative flex pl-32 rounded-xl pt-0 w-[50%] h-[100%] overflow-hidden">

<div className="relative w-[30rem]  h-[30rem] rounded-xl overflow-hidden">
<div className="slideshow">
<img className="slide w-full h-full object-cover rounded-xl" src="/User.jpg" alt="User1" />
<img className="slide w-full h-full object-cover rounded-xl" src="/User2.jpg" alt="User2" />
<img className="slide w-full h-full object-cover rounded-xl" src="/User3.jpg" alt="User3" />
</div>
</div>
</div>
            <div className="right w-1/2 flex flex-col h-full p-5  ">
                <h1 className='text-7xl text-white '>Contact Detail</h1>
                <div className="form w-full flex flex-col h-[50vh] leading-10 ">
                    <label htmlFor="Name" className='text-white'>Name</label>
                    <input type="text" value={"Dev Kumar Saini"} className=' bg-transparent outline-none text-white w-1/2 px-5 border-2 border-t-0 border-l-0 border-r-0' />
                    <label htmlFor="Email" className='text-white'>Email</label>
                    <input type="text" value={"devsaini27806@gmail.com"} className=' bg-transparent outline-none text-white w-1/2 border-2 px-5 border-t-0 border-l-0 border-r-0' />
                    <label htmlFor="Email" className='text-white'>Location</label>
                    <input type="text" value={"Jaipur, Rajasthan, India"} className=' bg-transparent outline-none text-white w-1/2 border-2 px-5 border-t-0 border-l-0 border-r-0' />
            
                    <button onClick={()=>navigate("/developer")} className='border-2 w-1/4 ml-20 rounded-full mt-10 text-white'>More Detail</button>
                </div>
            </div>
        </div>

    )
}
