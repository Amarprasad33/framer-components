"use client"
import { color, motion, LayoutGroup } from 'framer-motion';
import { useState } from 'react';

const buttonVariants = {
  initial: {
    color: '#A0A0A0',
    textShadow: 'none',
    transition: {
      color: { duration: 0.15 }, // 150ms
      textShadow: { duration: 0.25 }
    }
  },
  hover: {
    color: '#EDEDED',
    transition: {
      color: { duration: 0.15 }, // 150ms
      textShadow: { duration: 0.25 }
    }
  },
  selected: {
    color: '#EDEDED',
    textShadow: 'rgba(255, 255, 255, 0.57) 1px 1px 12px',
  }
}

export default function FlashlightTabs() {
  // ${colors['--colors-gray1']}
  const [selected, setSelected] = useState('Home');
  const tabs = ["Home", "Projects", "Deployments", "Members", "Settings"];
  return (
    <main className={`min-h-screen w-full flex justify-center items-center bg-gray1 text-white`}>
      <div className="content-container flex flex-col gap-8 w-2/4 h-2/4">
        <div className="flex items-center">
          <div className="flex flex-col gap-2">
            <div>Flashlight Tabs</div>
            <div className="text-gray11">Redesign - 2024</div>
          </div>
          <div className="ml-auto flex justify-center items-center w-10 h-10 rounded-full cursor-pointer bg-gray4">
            <svg className='text-blue-400' width="18px" height="18px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#6b6a73"><path d="M14 11.998C14 9.506 11.683 7 8.857 7H7.143C4.303 7 2 9.238 2 11.998c0 2.378 1.71 4.368 4 4.873a5.3 5.3 0 001.143.124" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 11.998c0 2.491 2.317 4.997 5.143 4.997h1.714c2.84 0 5.143-2.237 5.143-4.997 0-2.379-1.71-4.37-4-4.874A5.304 5.304 0 0016.857 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </div>
        </div>

        <div className="comp w-full flex justify-center items-center h-80 border border-gray4 bg-gray2 rounded-xl">
          <LayoutGroup>
            <div className="flashligh-tabs p-[5px] relative flex border border-gray6 rounded-full overflow-hidden">
              <div aria-hidden="true" className="bg-gradient-to-r from-gray6/20 via-gray10/65 to-gray1/5 absolute h-[1px] -top-[1px] left-14 w-[85%]"></div>

              {tabs.map((tab) => (
                <motion.button
                  key={tab}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="clicked"
                  className="px-[12px] py-[10px] text-[15px] relative flex justify-center items-center text-center outline-0 cursor-pointer"
                  animate={selected == tab ? "selected" : "initial"}
                  onClick={() => setSelected(tab)}
                >
                  {tab}
                  {selected == tab &&
                    <motion.div
                      layoutId='glow'
                      initial={false}
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.8
                      }}
                      style={{
                        position: 'absolute',
                        width: '50%',
                        height: '50px',
                        background: 'white',
                        borderRadius: '9999px',
                        zIndex: 1,
                        bottom: '-52px',
                        filter: 'blur(7px)',
                        opacity: 0.2,
                        // transform: 'rotate(1e-05deg) scale(2, 2)',
                        // transformOrigin: '50% 50%'
                      }}
                      animate={{
                        rotate: 0.00001,
                        scale: [2, 2],
                        transformOrigin: '50% 50%'
                      }}
                    >
                    </motion.div>
                  }
                  {selected == tab &&
                    <motion.div
                      layoutId="background"
                      initial={false}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.8
                      }}
                      style={{
                        position: 'absolute',
                        left: '0px',
                        top: '0px',
                        width: '100%',
                        padding: '10px 12px',
                        height: '100%',
                        zIndex: 6,
                        backgroundColor: 'rgba(255, 255, 255, 0.056)',
                        transition: 'backdrop-filter 500ms',
                        // transform: 'none',
                        // transformOrigin: '50% 50% 0px'
                      }}
                      animate={{
                        transform: 'none',
                        transformOrigin: '50% 50% 0px',
                        borderRadius: selected === tab && (tab == tabs[0] || tab == tabs[tabs.length - 1]) ? (tab == tabs[0] ? '999px 250px 250px 999px' : '250px 999px 999px 250px') : '999px',
                      }}
                    >
                    </motion.div>
                  }
                </motion.button>
              ))}
            </div>
          </LayoutGroup>
        </div>
      </div>
    </main>
  )
}

// linear-gradient(90deg,
//     rgba(0, 0, 0, 0), var(--colors-gray6) 20%, var(--colors-gray10) 67.19%, rgba(0, 0, 0, 0))
