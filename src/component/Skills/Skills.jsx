import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap';
export default function Skills() {

    useEffect(() => {

        function circleMouseFollower(xscale, yscale) {
            window.addEventListener("mousemove", function (dets) {
                document.querySelector(
                    "#minicircle"
                ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
            });
        }
        circleMouseFollower()

        document.querySelectorAll(".elem").forEach(function (elem) {
            var rotate = 0;
            var diffrot = 0;

            elem.addEventListener("mouseleave", function (dets) {
                gsap.to(elem.querySelector("img"), {
                    opacity: 0,
                    duration: 0.5,
                });
            });

            elem.addEventListener("mousemove", function (dets) {
                var diff = dets.clientY - elem.getBoundingClientRect().top;
                diffrot = dets.clientX - rotate;
                rotate = dets.clientX;
                gsap.to(elem.querySelector("img"), {
                    opacity: 1,

                    top: diff,
                    left: dets.clientX,
                    rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
                });
            });
        });
    }, [])

    return (
        <div className='Skills text-white hidden 2xl:flex  w-[100vw] h-auto  flex-col    rounded-lg'>
            <h1 className='text-center text-7xl my-5 leading-tight'>Skills</h1>
            <div className="image 
                 bg-clip-content  text-transparent
            relative w-full flex items-center justify-center">
                <img className="    w-72  top-12 left-[44%]    " src="https://ik.imagekit.io/sheryians/FrontEnd%20Donation/frontend-domination_gkQjfCjLF.png?updatedAt=1715900754599" alt="" />
                <img style={{
                    filter: "blur(200px)",
                    zIndex: '10'
                }}

                    className=' absolute z-[-1]  translate-x-[-50px] translate-y-[-50px] opacity-[1]   w-72  top-12 left-[44%]  
                ' src="https://ik.imagekit.io/sheryians/FrontEnd%20Donation/frontend-domination_gkQjfCjLF.png?updatedAt=1715900754599" alt="" />

            </div>
            <motion.h1 initial={{ filter: "blur(10px)" }} animate={{ filter: "blur(0px)" }} transition={{ duration: 6 }}

                className='text-center my-5 text-8xl tracking-tighter
            bg-[url("https://ik.imagekit.io/sheryians/FrontEnd%20Donation/maskImage_FGox7OMxja.png?updatedAt=1715900754637")] bg-clip-text text-transparent font-bold
                         '>Frontend Developer</motion.h1>
            <div className="image  mt-52 bg-clip-content  text-transparent  relative w-full flex items-center justify-center">
                <img className='w-72 absolute bottom-0  z-10 ' src="https://ik.imagekit.io/sheryians/BackEnd%20Donation/nodeJs_0PymuvVgr.jpg" alt="" />
                <img style={{ filter: "blur(22px)" }}

                    className='w-72 absolute bottom-0 opacity-[5] z-0 ' src="https://ik.imagekit.io/sheryians/BackEnd%20Donation/nodeJs_0PymuvVgr.jpg" alt="" />
            </div>
            <motion.h1 initial={{ filter: "blur(10px)" }} animate={{ filter: "blur(0px)" }} transition={{ duration: 6 }}

                className='text-center my-5 text-8xl mt-20 tracking-tighter
            bg-[url("https://ik.imagekit.io/sheryians/BackEnd%20Donation/maskImage_W7a6T_MXGY.png?updatedAt=1715856788796")] bg-clip-text text-transparent font-bold
                         '>Backend Developer</motion.h1>
 





            <div className="div w-full mt-20  h-[260vh] flex flex-col ">
                <div className="elem html flex items-center   w-full border-t-2 border-b-2 relative  border-l-0 border-r-0 p-10 text-6xl font-semibold h-52">
                    <img className='w-52 opacity-0 pointer-events-none translate-x-[-50px] translate-y-[-50px]  absolute z-[999]' src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png" alt="" />
                    <h1 className='opacity-[0.5]'>HTML</h1>
                </div>
                <div className="elem css w-full flex items-center relative   border-l-0 border-r-0 p-10 h-52 text-6xl font-semibold">
                    <img className='w-52 opacity-0 translate-x-[-50px] translate-y-[-50px] pointer-events-none  absolute z-40' src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="" />
                    <h1 className='opacity-[0.5]'>CSS</h1>
                </div>
                <div className="elem javascript flex items-center relative  w-full border-l-0 border-r-0 p-10 border-2 h-52 text-6xl font-semibold">
                    <img className='w-52 opacity-0 translate-x-[-50px] translate-y-[-50px] pointer-events-none  absolute z-40' src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="" />
                    <h1 className='opacity-[0.5]'>JAVASCRIPT</h1>
                </div>
                <div className="elem React flex items-center w-full relative p-10 border-l-0 border-r-0  h-52 text-6xl font-semibold">
                    <img className='w-52 opacity-0 translate-x-[-50px] translate-y-[-50px] pointer-events-none  absolute z-40' src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png" alt="" />
                    <h1 className='opacity-[0.5]'>REACT-JS</h1>
                </div>
                <div className="elem Github flex items-center w-full relative  p-10 border-l-0 border-r-0 border-2 h-52 text-6xl font-semibold">
                    <img className='w-52 opacity-0 translate-x-[-50px] translate-y-[-50px] pointer-events-none  absolute z-40' src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="" />
                    <h1 className='opacity-[0.5]'>GIT&GITHUB</h1>
                </div>
                <div className="elem Nodejs flex items-center w-full relative  p-10 border-l-0 border-r-0  h-52 text-6xl font-semibold">
                    <img className='w-52 opacity-0 translate-x-[-50px] translate-y-[-50px] pointer-events-none  absolute z-40' src="https://cdn-icons-png.flaticon.com/128/15484/15484303.png" alt="" />
                    <h1 className='opacity-[0.5]'>NODEJS</h1>
                </div>
                <div className="elem Express flex items-center w-full relative  p-10 border-l-0 border-r-0 border-2 h-52 text-6xl font-semibold">
                    <img className='w-52 opacity-0 translate-x-[-50px] translate-y-[-50px] pointer-events-none  absolute z-40' src="https://img.icons8.com/?size=80&id=9Gfx4Dfxl0JK&format=png" alt="" />
                    <h1 className='opacity-[0.5]'>EXPRESS</h1>
                </div >
                <div className="elem MongoDB flex items-center w-full relative  p-10 border-l-0 border-r-0  h-52 text-6xl font-semibold">
                    <img className='w-52 opacity-0 translate-x-[-50px] translate-y-[-50px] pointer-events-none  absolute z-40' src="https://img.icons8.com/?size=80&id=tBBf3P8HL0vR&format=png" alt="" />
                    <h1 className='opacity-[0.5]'>MONGODB</h1>
                </div>


            </div >
        </div >
    )
}
