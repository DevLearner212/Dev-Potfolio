import React from 'react'
import {  GithubIcon } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
export default function Project() {
    const handleURL = () => {
        window.open("https://github.com/DevLearner212/E-Commerce-Project", "_blank");
    };
    const navigate = useNavigate()
    return (
        <>
            <div className="projects container w-[100vw] h-[100vh]  overflow-hidden ">
                <h1 className='text-white text-5xl text-center my-10'>Projects</h1>
                <div className="container w-[100%] h-[80%]   gap-10 justify-center flex overflow-hidden items-center">
                    <div className="firstclone  rounded-md w-[30%] h-[90%] 
                    border-dotted">
                        <div className="
                        bg-[url('https://cdn.pixabay.com/photo/2022/01/21/00/38/youtube-icon-6953527_640.jpg')]
                        bg-no-repeat bg-center bg-cover
                        logo relative w-full flex justify-center rounded-md items-center h-[50%]">

                        </div>
                        <div className="details">
                            <h1 className='text-white text-3xl m-5'>Youtube Full Backend 🎥</h1>
                            <p className='text-white px-6'>I built a YouTube backend clone to demonstrate my skills in backend development, API design, and database management. The project replicates core YouTube functionalities, including user authentication, video upload, video streaming, likes, comments, and subscriptions.</p>
                            <div className="div   flex justify-center gap-4 mt-2 items-center h-auto">
                          <button onClick={handleURL} className='border-2  w-32 text-white rounded-lg p-2 flex justify-center items-center'><GithubIcon/> Github</button>
                             <button onClick={()=>navigate("/github")} className='border-2   w-32 text-white rounded-lg p-2'>Show Me</button>
                            </div>
                     
                        </div>
                    </div>
                    <div className="firstclone  rounded-md w-[30%] h-[90%]">
                        <div className="
                        bg-[url('/public/E-commerce.png')]
                        bg-no-repeat bg-center bg-contain
                        logo relative w-full flex justify-center rounded-md items-center h-[50%]">

                        </div>
                        <div className="details">
                            <h1 className='text-white text-3xl m-5'>Onsko E-commerce</h1>
                            <p className='text-white px-6'> This is a full-fledged E-commerce platform built using MERN stack (MongoDB, Express.js, React.js, Node.js) with modern features like secure authentication, payment integration, cart management, and admin dashboard. It provides a seamless shopping experience with real-time cart</p>
                            <div className="div   flex justify-center gap-4 mt-3 items-center h-auto">
                          <button onClick={handleURL} className='border-2  w-32 text-white rounded-lg p-2 flex justify-center items-center'><GithubIcon/> Github</button>
                             <button onClick={()=>navigate("/E-commerce")} className='border-2   w-32 text-white rounded-lg p-2'>Show Me</button>
                            </div>
                         </div>
                    </div>
                    <div className="firstclone rounded-md w-[30%] h-[90%]">
                        <div className="
                        bg-[url('https://e0.pxfuel.com/wallpapers/891/733/desktop-wallpaper-shopify-ecommerce-shopify-shopify-background-e-commerce-thumbnail.jpg')]
                        bg-no-repeat bg-center bg-cover
                        logo relative w-full flex justify-center rounded-md items-center h-[50%]">

                        </div>
                        <div className="details">
                            <h1 className='text-white text-3xl m-5'>ShopiFY</h1>
                            <p className='text-white px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis dolores praesentium esse, molestiae earum aperiam temporibus facere, veritatis ratione deserunt. Voluptas quasi aperiam illo iste repellat. Harum, quod laborum.</p>
                            <button className='border-2 mx-24 w-1/2 text-white rounded-full p-2'>Show Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
