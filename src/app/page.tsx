"use client"

import { Component, useEffect, useRef, useState } from "react"

export default function Home() {
  const [sideMenuToggle, setSideMenuToggle] = useState(false);
  const [mainClick, setMainClick] = useState(false);
  const sideMenuRef = useRef(null);
  const menuBtnRef = useRef(null);

  // const handleMenuBtnClick = () => {
  //     setSideMenuToggle(!sideMenuToggle);
  // }
  // const handleClickOnMain = () => {

  // }
  const onClickToggleSideMenu = () => {
    setSideMenuToggle(!sideMenuToggle);
  }


  useEffect(() => {
    const handleClick = (e: any) => {
      console.log("eve", e.target);
      if (!menuBtnRef?.current.contains(e.target)) {
        if (!sideMenuRef?.current?.contains(e.target)) {
          console.log("CLOSINGGGG")
          setSideMenuToggle(false);
        }
      }
    }
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [])
  const Routes = [
    { path: '/glitch', name: 'Glitch Comp' },
    { path: '/gooey', name: 'Gooey effect' },
    { path: '/gooey-man', name: 'Another Gooey' },
    { path: '/profile-tooltip', name: 'Animated Tooltip' },
    
    { path: '/form_test', name: 'Form' },
    { path: '/framer', name: 'Framer--' },
    { path: '/rauno', name: 'Rauno' },
    { path: '/tr/border-gradient', name: 'Border gradient' },
    { path: '/tr/circles', name: 'Circles' },
    { path: '/tr/dynamic-island', name: 'Dynamic Island' },
    
    { path: '/tr/peerlist_uich', name: 'UI challenge' },
    { path: '/tr/playground', name: 'Play ground 1' },
    { path: '/tr/playground2', name: 'Play ground 2' },
  ]

  // Demo text text-terex

  return (
    <main className="flex relative">
      {/* <button onClick={handleMenuBtnClick} data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button> */}
      {/* aside -- diff from the main div -- only the sidebar and the bg resides in this */}
      <div className={`h-[1.7rem] w-[1.7rem] rounded-full ${sideMenuToggle ? 'hover:bg-slate-400' : 'hidden'} bg-slate-500 absolute right-16 top-10 z-20 flex justify-center items-center cursor-pointer`}>
        <button className="h-[0.7rem] w-[0.7rem]  bg-cover bg-[url('/assets/cross.svg')]"></button>
      </div>
      <aside id="sidebar-multi-level-sidebar" className={`fixed lg:sticky left-0 top-0 z-10 h-[100dvh] w-full overflow-hidden transition-all duration-300 lg:max-w-[224px] lg:pointer-events-auto ${sideMenuToggle ? 'opacity-100' : 'opacity-0 lg:opacity-100'}  ${sideMenuToggle ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-label="Sidebar">
        <div className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
        <div id="sidebar-contents" ref={sideMenuRef} className={`relative h-[100dvh] text-[#fff] max-w-[224px] mr-auto px-2 py-4 transition-transform duration-300 ease-in-out flex flex-col gap-4 overflow-y-auto bg-[#1E2640] ${sideMenuToggle ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} dark:bg-gray-800`}>
          <div className="flex gap-3 text-[#fff] items-center mx-auto w-[94%]">
            <div className="w-[39px] h-[39px] rounded-[4px] bg-center bg-cover bg-[url('/assets/logo.jpg')]"></div>
            <div className="flex flex-col gap-[1px]">
              <span className="font-medium text-[15px] leading-[22px]">Immortalz</span>
              <span className="underline text-[13px] text-[#D2D4D9] font-extralight">Visit store</span>
            </div>
            <div className="ml-auto">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </div>
          </div>
          <ul className="space-y-2 font-medium">
            { Routes.map((navItem, idx) => (
                <li key={idx}>
                  <a href={navItem.path} target="_blank" className="flex items-center p-2 text-gray-100 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                    <span className="ms-3">{ navItem.name }</span>
                  </a>
                </li>
            )) }
            
            

          </ul>
        </div>
      </aside>

      <div className="w-full">
        <header className="flex justify-between items-center gap-2 sm:gap-4 px-4 sm:px-8 py-3 border-b border-[#D9D9D9] sticky top-0 bg-[#fff]">
          <button onClick={onClickToggleSideMenu} ref={menuBtnRef} className="lg:hidden" >-menu-</button>
          <div>payouts</div>
        </header>
      </div>

    </main>
  )
}
