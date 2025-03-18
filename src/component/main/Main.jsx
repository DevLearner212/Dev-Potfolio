import React from 'react'
import '../../index.css'
import { motion } from 'framer-motion'
export default function Main() {
    return (
        <>
            <div className="container  flex flex-col justify-center items-center  w-screen sm:mx-auto h-full overflow-x-hidden  sm:overflow-hidden
            
                2xl:hidden
            ">
                <div className="image w-auto rounded-full flex justify-center  mt-10 items-center h-auto">
                    <img className='sm:w-[40vw]' src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png" alt="" />
                </div>
                <div className="Name text-white w-[100%]   ">
                    <h1 className='text-center text-[8vw] py-3'>Dev Kumar Saini</h1>
                    <h2 className='text-center my-4 sm:text-center sm:text-4xl sm:my-5 sm:text-green-600 xl:text-5xl'>Full Stack Developer👋</h2>
                    <p className='px-[8vw] sm:text-center sm:text-xl lg:text-2xl'>Hi I like to create a interactive design and solid & scalable Code for clients . I really enjoying it</p>
                </div>
                <div className="social text-white my-5 sm:flex sm:flex-col sm:items-center sm:justify-center sm:my-10  xl:h-96  py-5">
                    <h1 className='flex items-center  sm:text-3xl xl:text-5xl'>Social Links <img className='w-6' src="https://cdn-icons-png.flaticon.com/128/13713/13713864.png" alt="" /></h1>
                    <div className="links  w-auto py-2 h-auto flex items-center gap-5 sm:gap-10 sm:my-5  xl:gap-32 ">
                        <img className='w-5 sm:w-10 sm:shadow-2xl xl:w-20' src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" />
                        <img className='w-5  sm:w-10  sm:shadow-2xl xl:w-20' src="https://cdn-icons-png.flaticon.com/128/1384/1384075.png" alt="" />
                        <img className='w-5  sm:w-10  sm:shadow-2xl xl:w-20' src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" />
                        <img className='w-5  sm:w-10  sm:shadow-2xl xl:w-20' src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
                    </div>
                </div>
            </div>



            {/* I am creating a different ui for laptop or desktop so i am using another way  */}





            <div className="hidden 2xl:flex container bg-black   justify-center items-center  w-screen h-[100vh]  ">
                <div className="container1     text-white  w-[50%]  h-[100%] ">
                    <div className="topName overflow-hidden    leading-[130px]    text-[10rem] pt-20 pl-10 font-semibold">
                        <motion.h1
                            initial={{ y: 150 }} animate={{ y: -1 }} transition={{ duration: 0.5, delay: 0.2 }}

                            className=' tracking-tight opacity-[0.3]'>Dev</motion.h1>
                    </div>
                    <div className="middleName overflow-hidden   leading-[120px] text-[10rem] pl-20  font-semibold">
                        <motion.h1
                            initial={{ y: 150 }} animate={{ y: -1 }} transition={{ duration: 0.5, delay: 0.3 }}

                            className=' tracking-tight opacity-[0.3]'>Kumar</motion.h1>
                    </div>
                    <div className="lowerName  overflow-hidden   leading-[130px] text-[10rem] pl-[18rem]  font-semibold">
                        <motion.h1
                            initial={{ y: 150 }} animate={{ y: -1 }} transition={{ duration: 0.5, delay: 0.4 }}

                            className=' tracking-tight opacity-[0.3]'>Saini</motion.h1>
                    </div>
                    <div className="socialLinks overflow-hidden  flex justify-start pl-52 items-center gap-10  h-40  text-3xl  py-12">


                        <motion.img
                            onClick={() => { location.href = "https://x.com/devvsaini12" }}
                            initial={{ y: -500 }} animate={{ y: 0, rotate: [0, 360] }} transition={{ duration: 0.5, delay: 0.9 }}
                            className='w-10' src="https://cdn-icons-png.flaticon.com/128/14417/14417709.png" alt="" />
                        <motion.img
                            onClick={() => { location.href = "https://www.linkedin.com/in/dev-saini-4432002b5" }}
                            initial={{ y: 500 }} animate={{ y: 0, rotate: [0, 360] }} transition={{ duration: 0.5, delay: 0.9 }}
                            className='w-10' src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
                        <motion.img
                            onClick={() => { location.href = "https://www.instagram.com/devv__ss1/?next=%2F" }}
                            initial={{ y: 500 }} animate={{ y: 0, rotate: [0, 360] }} transition={{ duration: 0.5, delay: 0.9 }}
                            className='w-10' src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" />

                    </div>
                </div>
                <div className="container2 relative flex pl-32 rounded-xl pt-10 w-[50%] h-[100%] overflow-hidden">

                <div className="relative w-[30rem]  h-[30rem] rounded-xl overflow-hidden">
      <div className="slideshow">
        <img className="slide w-full h-full object-cover rounded-xl" src="/User.jpg" alt="User1" />
        <img className="slide w-full h-full object-cover rounded-xl" src="/User2.jpg" alt="User2" />
        <img className="slide w-full h-full object-cover rounded-xl" src="/User3.jpg" alt="User3" />
      </div>
    </div>
                </div>


            </div >

        </>

    )
}
