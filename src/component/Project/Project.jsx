import React from 'react'
export default function Project() {
    return (
        <>
            <div className="projects container w-[100vw] h-[100vh]  overflow-hidden ">
                <h1 className='text-white text-5xl text-center my-10'>Projects</h1>
                <div className="container w-[100%] h-[80%]   gap-10 justify-center flex overflow-hidden items-center">
                    <div className="firstclone  rounded-md w-[30%] h-[90%] 
                    border-dotted">
                        <div className="
                        bg-[url('https://images.stockcake.com/public/f/f/4/ff44764d-9feb-4667-8ad5-ccaf002ca1ef_large/social-media-mix-stockcake.jpg')]
                        bg-no-repeat bg-center bg-cover
                        logo relative w-full flex justify-center rounded-md items-center h-[50%]">

                        </div>
                        <div className="details">
                            <h1 className='text-white text-3xl m-5'>All-in-One</h1>
                            <p className='text-white px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis dolores praesentium esse, molestiae earum aperiam temporibus facere, veritatis ratione deserunt. Voluptas quasi aperiam illo iste repellat. Harum, quod laborum.</p>
                            <button className='border-2 mx-24 w-1/2 text-white rounded-full p-2'>Show Me</button>
                        </div>
                    </div>
                    <div className="firstclone  rounded-md w-[30%] h-[90%]">
                        <div className="
                        bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMpwHoXcQq_sMykYjEOR7ZusxPPN04s53ytw&s')]
                        bg-no-repeat bg-center bg-cover
                        logo relative w-full flex justify-center rounded-md items-center h-[50%]">

                        </div>
                        <div className="details">
                            <h1 className='text-white text-3xl m-5'>Omegle Clone</h1>
                            <p className='text-white px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis dolores praesentium esse, molestiae earum aperiam temporibus facere, veritatis ratione deserunt. Voluptas quasi aperiam illo iste repellat. Harum, quod laborum.</p>
                            <a href="https://omega-1.onrender.com"><button className='border-2 mx-24 w-1/2 text-white rounded-full p-2'>Show Me</button></a>
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
