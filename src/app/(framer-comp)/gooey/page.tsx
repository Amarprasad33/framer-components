// "use client"
// import GooeyFilter from "@/components/gooey";
// import InfoIcon from "@/components/InfoIcon";
// import LoadingIcon from "@/components/LoadingIcon";
// import SearchIcon from "@/components/SearchIcon";
// import useDebounce from "@/hooks/useDeBounce";
// import { dummyData } from "@/lib/utils/dummydata";
// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import "../../custom.scss";


// const buttonVariants = {
//     initial: { x: 0, width: 100 },
//     step1: { x: 0, width: 100 },
//     step2: { x: -30, width: 180 },
//   };
  
//   const iconVariants = {
//     hidden: { x: -50, opacity: 0 },
//     visible: { x: 16, opacity: 1 },
//   };
  
// const getResultItemVariants = (index, isUnsupported) => ({
//     initial: {
//       y: 0,
//       scale: 0.3,
//       filter: isUnsupported ? "none" : "blur(10px)",
//     },
//     animate: {
//       y: (index + 1) * 50,
//       scale: 1,
//       filter: "blur(0px)",
//     },
//     exit: {
//       y: isUnsupported ? 0 : -4,
//       scale: 0.8,
//       color: "#000000",
//     },
//   });
  
//   const getResultItemTransition = (index) => ({
//     duration: 0.75,
//     delay: index * 0.12,
//     type: "spring",
//     bounce: 0.35,
//     exit: { duration: index * 0.1 },
//     filter: { ease: "easeInOut" },
//   });

// export default function GooeySearch(){
//     const inputRef = useRef(null);
//     const [state, setState] = useState({
//         step: 1, // Indicates the stage of the search process 1: Initial state - 2: Search field activated 
//         searchData: [], // Contains the results of the search process
//         searchText: "", // Stores the search text 
//         isLoading: false, // Used to show a loading icon when loading search results
//       });
//     let isUnsupported = true;
//     const debouncedSearchText = useDebounce(state.searchText, 500);

//     const handleButtonClick = () => {
//         setState((prevState) => ({ ...prevState, step: 2 }));
//     };
    
//     const handleSearch = (e) => {
//         setState((prevState) => ({ ...prevState, searchText: e.target.value }));
//     };
    
//     useEffect(() => {
//         if (state.step === 2) {
//           inputRef.current?.focus();
//         } else {
//           setState((prevState) => ({
//             ...prevState,
//             searchText: "",
//             searchData: [],
//             isLoading: false,
//           }));
//         }
//     }, [state.step]);

//     useEffect(() => {
//         let isCancelled = false;
    
//         if (debouncedSearchText) {
//           setState((prevState) => ({ ...prevState, isLoading: true }));
    
//           const fetchData = async () => {
//             try {
//               await new Promise((resolve) => setTimeout(resolve, 500));
    
//               const filteredData = dummyData.filter((item) =>
//                 item
//                   .toLowerCase()
//                   .includes(debouncedSearchText.trim().toLowerCase())
//               );
    
//               if (!isCancelled) {
//                 setState((prevState) => ({
//                   ...prevState,
//                   searchData: filteredData,
//                   isLoading: false,
//                 }));
//               }
//             } catch {
//               if (!isCancelled) {
//                 setState((prevState) => ({ ...prevState, isLoading: false }));
//               }
//             }
//           };
    
//           fetchData();
//         } else {
//           setState((prevState) => ({
//             ...prevState,
//             searchData: [],
//             isLoading: false,
//           }));
//         }
    
//         return () => {
//           isCancelled = true;
//         };
//     }, [debouncedSearchText]);

//     return (
//         <div className="wrapper">
//             <GooeyFilter />


//             <AnimatePresence mode="popLayout">
//                 <motion.div
//                     key="search-text-wrapper"
//                     className="search-results"
//                     role="listbox"
//                     aria-label="Search results"
//                     exit={{ scale: 0, opacity: 0 }}
//                     transition={{
//                         delay: isUnsupported ? 0.5 : 1.25,
//                         duration: 0.5,
//                     }}
//                 >
                    
//                     <AnimatePresence mode="popLayout">
//                         {state.searchData.map((item, index) => (
//                             <motion.div
//                             key={item}
//                             whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
//                             variants={getResultItemVariants(index, isUnsupported)}
//                             initial="initial"
//                             animate="animate"
//                             exit="exit"
//                             transition={getResultItemTransition(index)}
//                             className="search-result"
//                             role="option"
//                             >
//                             <div className="search-result-title">
//                                 <InfoIcon index={index} />
//                                 <motion.span
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ delay: index * 0.12 + 0.3 }}
//                                 >
//                                 {item}
//                                 </motion.span>
//                             </div>
//                             </motion.div>
//                         ))}
//                     </AnimatePresence>
//                 </motion.div>
//             </AnimatePresence>

//             <motion.div
//                 variants={buttonVariants}
//                 onClick={handleButtonClick}
//                 whileHover={{ scale: state.step === 2 ? 1 : 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="search-btn"
//                 role="button"
//             >
//                 {state.step === 1 ? (
//                 <span className="search-text">Search</span>
//                 ) : (
//                 <input
//                     ref={inputRef}
//                     type="text"
//                     className="search-input"
//                     placeholder="Type to search..."
//                     aria-label="Search input"
//                     onChange={handleSearch}
//                 />
//                 )}
//             </motion.div>

//             <AnimatePresence mode="wait">
//                 {state.step === 2 && (
//                     <motion.div
//                         key="icon"
//                         className="separate-element"
//                         initial="hidden"
//                         animate="visible"
//                         exit="hidden"
//                         variants={iconVariants}
//                         transition={{
//                         delay: 0.1,
//                         duration: 0.85,
//                         type: "spring",
//                         bounce: 0.15,
//                         }}
//                     >
//                         {!state.isLoading ? (
//                             <SearchIcon isUnsupported={isUnsupported} />
//                         ) : (
//                             <LoadingIcon />
//                         )}
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     )
// }

export default function GooeySearch(){
    return (
        <div>Didn't worked :(
            
        </div>
    )
}