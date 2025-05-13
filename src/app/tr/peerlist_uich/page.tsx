"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PricingToggle = () => {
  const [active, setActive] = useState(false);
  const [premiumToggle, setPremiumToggle] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="relative bg-white border border-[#e6e6e6] p-1 rounded-full shadow-lg w-[32rem] h-16 flex justify-center">
        {/* Toggle background */}
        <motion.div
            className={`absolute top-[3px] left-0 h-[92%] rounded-full bg-black`}
            initial={{
                width: '50%',
                x: '1%'
            }}
            animate={{
                x: active ? "99%" : "1%",
                width: active ? "50%" : "50%",
            }}
            transition={{ 
                duration: 0.3, 
                ease: "easeInOut", 
            }}
        />

        {/* Toggle buttons */}
        <div className="relative flex items-center w-full">
          <div
            className={`px-8 py-3 rounded-full text-lg font-semibold z-10 absolute left-20 cursor-pointer ${
              !active ? "text-white" : "text-gray-600"
            }`}
            onClick={() => setActive(false)}
          >
            Free
          </div>
          <div
            className={`rounded-full text-sm font-medium z-10 absolute right-12 top-[8px] ${active ? "text-white" : "text-gray-600"}`}
            onClick={() => setActive(true)}
          >
            <div className="relative flex flex-col justify-center items-center">
                <AnimatePresence>
                  {!active && <motion.div className={`font-semibold text-lg cursor-pointer ${active? 'text-white' : 'text-black'}`} style={{opacity: '1', top: '8px'}}
                      initial={{ opacity: 1, translateY: -4 }}
                      animate={{ 
                          opacity: active? 0 : 1, 
                          // scale: active? 0 : 1, 
                          transition: { duration: 300, ease: "easeInOut" }
                      }}
                      exit={{ opacity: 0, scale: 1 }}
                  >
                      Premium
                  </motion.div>}
                  <motion.div className={`flex items-center ${active? 'gap-6' : 'gap-1'} ${active? 'text-white' : 'text-black'} text-sm font-normal`}
                      initial={{
                        translateY: -6
                      }}
                      animate={{
                        translateY: active ? [28, 8] : -6,
                        scale: active ? [0.3, 1.3] : 1,
                        opacity: 1,
                      }}
                      exit={{
                        scale: 1,
                        translateY: -6,
                      }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    {active && <motion.div 
                      className="absolute -left-[1.3rem] -top-[9px] w-24 h-10 rounded-full bg-white z-10"
                      initial={{
                          x: '0%'
                      }}
                      animate={{
                          translateX: premiumToggle ? "96px" : "0px",
                          // width: active ? "50%" : "50%",
                      }}
                      transition={{ 
                          duration: 0.3, 
                          ease: "easeInOut", 
                        
                      }}
                    ></motion.div>}
                      <span className={`z-40 cursor-pointer ${!premiumToggle && 'text-black'}`} onClick={() => setPremiumToggle(false)}>Monthly</span>
                      <span className={`block size-1 rounded-full bg-black ${active? 'text-white' : 'text-black'}`}></span>
                      <span className={`z-40 cursor-pointer ${premiumToggle && 'text-black'}`} onClick={() => setPremiumToggle(true)}>Annual</span>
                  </motion.div>
                </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      
    </div>
  );
};

export default PricingToggle;