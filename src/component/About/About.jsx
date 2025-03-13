import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
export default function About() {
    const [show, setshow] = useState(true)
    const [show2, setshow2] = useState(true)

    return (
        <>
            <div className='container 2xl:hidden  sm:mx-auto p-5 flex flex-col items-center w-screen h-auto overflow-x-hidden '>
                <div className="image w-60 lg:w-96  lg:h-32 h-10 mb-5 flex flex-col text-white justify-center items-center sm:my-10">
                    <h1 className='text-2xl sm:text-4xl lg:text-6xl mb-1 '>What I do</h1>
                    <img className='w-[15%] sm:w-[20%]' src="https://media.tenor.com/qKGlaYl2DqMAAAAj/gif-de-sauda%C3%A7%C3%A3o.gif" alt="" />
                </div>
                <div className="content w-[90%]  sm:h-auto sm:text-2xl  lg:text-4xl lg:leading-[100px]  mb-10 leading-8 sm:leading-10 h-92 text-white rounded-lg " >
                    <p className='text-justify'><font color="#050C9C">Hey there,</font>  I'm Dev K.Saini. I have a background in Computer Application, and
                        I recently graduated with a degree in B.C.A, and I'm passionate about Front-End/Back-End/Cloud and
                        I'm currently exploring opportunities in Front-End Roles.</p>
                </div>
                <div className="qualifications  sm:h-52 md:mb-12   text-white h-40  w-[90%] p-5">
                    <h1
                        onClick={() => setshow((prev) => !prev)}
                        className='text-[5vw] text-center my-1 '>Qualifications</h1>
                    {show ? <div className="content py-2 text-[3vw]  ">
                        <li>Passed out from New Pupil's Academy</li>
                        <li>Graduated from University of Commerce College</li>
                    </div> : null}
                </div>
                <div className="qualifications  text-white h-52 lg:mt-32 lg:h-96  mt-[2vh]  w-[90%] p-5">
                    <h1
                        onClick={() => setshow2((prev) => !prev)}
                        className='text-[5vw] lg:text-[5vw] text-center my-2 '>Skills</h1>
                    {show2 ? <div className="content justify-center items-center py-2 lg:py-5 grid grid-cols-4 gap-4 lg:gap-14 sm:pl-10  ">
                        <img className='w-[6vw]' src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png" alt="" />
                        <img className='w-[6vw]' src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="" />
                        <img className='w-[6vw]' src="https://cdn-icons-png.flaticon.com/128/1199/1199124.png" alt="" />
                        <img className='w-[6vw]' src="https://cdn-icons-png.flaticon.com/128/226/226777.png" alt="" />
                        <img className='w-[6vw]' src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png" alt="" />
                        <img className='w-[6vw]' src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="" />
                        <img className='w-[6vw]' src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="" />
                        <img className='w-[6vw]' src="https://cdn-icons-png.flaticon.com/128/1104/1104982.png" alt="" />
                    </div> : null}
                </div>
                <div className="image sm:w-full mt-20 sm:h-52  sm:flex sm:justify-center sm:items-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png" alt="" />
                </div>
            </div>
            {/*  */}

            {/* here we are creating a website for 2xl means for pc or latptop */}


            <div className="devsaini 2xl:flex hidden container w-[100vw] h-[100vh]   justify-center items-center rounded-lg">
                <div

                    className="mini-container 
                    bg-[url('https://images.unsplash.com/photo-1651575560910-b497ea4ec36f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover
                    overflow-hidden flex relative text-white  flex-col     w-[90%] h-[90%]  rounded-xl  bg-black shadow-xl">
                    <h1 className=' text-5xl mx-auto py-10'>About Me</h1>
                    <p className='text-justify px-72 text-3xl leading-[50px]'><font color="orange">Hey there,</font>  I'm Dev K. Saini. I have a background in Computer Application, and
                        I recently graduated with a degree in B.C.A from <a className='text-pink-600' target='_blank'
                            href="https://universitycommercecollege.ac.in/"> University of Commerce college</a>, jaipur, and I'm passionate about Front-End/Back-End/Cloud and
                        I'm currently exploring opportunities in.</p>

                    <motion.h2
                        initial={{ x: -1100 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 2 }}
                        className='text-center mt-10 text-6xl tracking-tighter bg-clip-text text-transparent 
                        bg-[url("https://plus.unsplash.com/premium_photo-1685082778336-282f52a3a923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3IlMjBtaXh8ZW58MHx8MHx8fDA%3D")]
                        '>Frontend Developement Roles.</motion.h2>
                    <motion.h2
                        initial={{ x: -1100 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 2 }}
                        className='text-center mt-5 text-5xl tracking-tighter bg-clip-text text-transparent  
                        bg-[url("https://images.unsplash.com/photo-1659354618598-6029225ed457?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbG9yJTIwbWl4fGVufDB8fDB8fHww")]
                        '>Backend Developement Roles.</motion.h2>


                </div>
            </div>


        </>



    )
}
