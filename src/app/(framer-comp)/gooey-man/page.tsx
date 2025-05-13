"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"



export default function GooeyMan() {
    const [animate, setAnimate] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const containerVariants = {
        open: {
          transition: {
            staggerChildren: 0.05,
            delayChildren: 0.05,
          },
        },
        closed: {
          transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
          },
        },
      };
    
      const itemVariants = {
        open: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
          },
        },
        closed: {
          opacity: 0,
          y: -20,
          transition: {
            duration: 0.2,
          },
        },
      };
    
    const menuItems = ['D', 'D', 'D', 'D'];
    
  return (
    <div className=" w-full min-h-screen flex flex-col justify-center items-center">
        <div className="flex gap-2">
            {/* <div className="square w-20 h-20 bg-blue-600 animate-spin blur-lg contrast-200"></div> */}
            {/* <div className="square w-20 h-20 bg-blue-600" style={{filter: 'blur(#blur)'}}></div> */}

            {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="blur">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                    </filter>
                </defs>
                <foreignObject width="100%" height="100%" filter="url(#blur)">
                    <div className="w-20 h-20 bg-blue-600 absolute top-[20%] left-[38%]"></div>
                </foreignObject>
            </svg> */}

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        {/* <feBlend in="SourceGraphic" in2="goo" /> */}
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
                <foreignObject width="100%" height="100%" filter="url(#goo)">
                    <div className="w-20 h-20 bg-black text-white absolute top-[20%] left-[19%] flex justify-center items-center">1st</div>
                    <div className={`w-20 h-20 bg-black text-white absolute top-[20%] left-[19%] flex justify-center items-center
                    ${animate? 'translate-x-[130%] duration-[2.6s]' : 'translate-x-0 duration-1000'}`}>2nd</div>
                </foreignObject>
            </svg>

            <div onClick={() => setAnimate(true)} className="h-fit py-1 px-4 border border-slate-400 rounded-xl cursor-pointer">Click to trigger</div>
            <div onClick={() => setAnimate(false)} className="h-fit py-1 px-4 border border-slate-400 rounded-xl cursor-pointer">Click to reset</div>


            {/* <div className="square w-20 h-20 rounded-full bg-blue-600 "></div> */}
        </div>

        <div className="w-full min-h-screen border border-rose-600 flex flex-col items-center">
            <div>Second section</div>

            <div className="mt-[10rem] flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="h-[20rem] w-[20rem] flex justify-center items-center border border-rose-600">
                    <defs>
                        <filter id="gooey-tooltip"  x="-50%" y="-50%" width="200%" height="200%" filterUnits="userSpaceOnUse">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="goo" />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                        </filter>
                    </defs>
                    <foreignObject width="100%" height="100%" filter="url(#gooey-tooltip)">
                        <div className="w-full h-full flex justify-center items-center">
                            <div 
                                className="btn-container mt-24 w-16 h-16 relative z-20 bg-black rounded-2xl flex justify-center items-center text-white text-2xl font-bold"
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                            >
                                <span className="text-white">M</span>
                                <AnimatePresence>
                                    {hovered && (
                                        <motion.div 
                                            initial={{
                                                y: 0,
                                                scale: 0.3,
                                                z: 3
                                            }}
                                            animate={{
                                                y: -120,
                                                scale: 1,
                                                z: 3
                                            }}
                                            exit={{
                                                y: 0,
                                                scale: 0.3,
                                                opacity: 0,
                                                z: 3
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 25,
                                                mass: 1.8,
                                                duration: 3,
                                                z: 3
                                            }}
                                            className="flex flex-col min-w-[10rem] gap-2 text-sm absolute px-2 py-2 rounded-lg bg-black"
                                        >
                                            <div className="hover:bg-slate-700 rounded-md px-2 py-1 cursor-pointer">Home</div>
                                            <div className="hover:bg-slate-700 rounded-md px-2 py-1 cursor-pointer">Profile</div>
                                            <div className="hover:bg-slate-700 rounded-md px-2 py-1 cursor-pointer">Contact</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </foreignObject>
                </svg>

                {/* UI - animation challenge */}
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="h-[20rem] w-[20rem] flex justify-center items-center border border-rose-600">
                    <defs>
                        <filter id="gooey-tooltip"  x="-50%" y="-50%" width="200%" height="200%" filterUnits="userSpaceOnUse">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="goo" />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                        </filter>
                    </defs>
                    <foreignObject width="100%" height="100%" filter="url(#gooey-tooltip)">
                        <div className="w-full h-full flex justify-center items-center">
                            {/* <div className="flex flex-col gap-[2px]">
                                <button className="h-10 w-10 rounded-full bg-gray-300 text-white">D</button>
                                <button className="h-10 w-10 rounded-full bg-gray-300 text-white">D</button>
                                <button className="h-10 w-10 rounded-full bg-gray-300 text-white">D</button>
                                <button className="h-10 w-10 rounded-full bg-gray-300 text-white">D</button>
                                <button className="h-10 w-10 rounded-full bg-gray-300 text-white">D</button>
                            </div> */}
                            <div className="flex flex-col gap-[2px] items-center h-[10rem]">
                                {/* Toggle Button (Always Visible) */}
                                <button
                                    onClick={() => setIsOpen((prev) => !prev)}
                                    className="h-10 w-10 rounded-full bg-gray-300 text-white absolute top-[39px]"
                                >
                                    {isOpen ? 'X' : '≡'}
                                </button>

                                {/* Menu Items (Animated) */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            className="flex flex-col gap-[2px] mt-[2px]"
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                            variants={containerVariants}
                                        >
                                        {menuItems.map((label, index) => (
                                            <motion.button
                                                key={index}
                                                className="h-10 w-10 rounded-full bg-gray-300 text-white"
                                                variants={itemVariants}
                                            >
                                            {label}
                                            </motion.button>
                                        ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </foreignObject>
                </svg>
            </div>
        </div>

    </div>
  )
}