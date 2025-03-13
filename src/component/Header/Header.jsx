import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
export default function Header() {
    return (
        <>
            <motion.nav
                initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
                className='flex    justify-between items-center
         
            sm:bg-orange-600 md:bg-red-600 lg:bg-green-600 xl:bg-pink-700 2xl:bg-[#0000] 2xl:text-white w-screen h-10 md:h-20 md:px-10'>
                <h1 className='text-white  sm:text-2xl md:text-4xl '>DevSaini.__</h1>
                <img className='w-5  sm:w-8 md:w-12 lg:hidden' src="https://cdn-icons-png.flaticon.com/128/13676/13676211.png" alt="" />
                <ul className='hidden cursor-pointer lg:flex lg:gap-20  lg:text-2xl 2xl:text-lg   '>
                <li>  Home  </li>
                   
                    <Link activeClass="active"
                        to="devsaini"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}

                    >
                     <li>  About  </li>
                    </Link>
                    <Link activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={1000}

                    >
                        <li>  Contacts  </li>
                   
                    </Link>
                    <Link activeClass="active"
                        to="Skills"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}

                    >
                   <li>  Skills  </li>
                   
                    </Link>
                    <Link activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}

                    >
                      <li>  Projects  </li>
                   
                    </Link>
                </ul>
                <div className="div hidden lg:inline-block lg:w-10">
                    <img src="https://cdn-icons-png.flaticon.com/128/11457/11457488.png" alt="" />
                </div>
            </motion.nav>
        </>
    )
}
