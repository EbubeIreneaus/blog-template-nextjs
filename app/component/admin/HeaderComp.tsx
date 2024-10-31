"use client"
import React from "react";

function toggleDD(myDropMenu: string) {
  document.getElementById(myDropMenu)?.classList.toggle("invisible");
}

function HeaderComp() {
  /*Toggle dropdown list*/

  return (
    <header>
      {/* <!--Nav--> */}
      <nav
        aria-label="menu nav"
        className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto  w-full"
      >
        <div className="flex flex-wrap items-center">
          <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
            <a href="#" aria-label="Home">
              <span className="text-xl pl-2">
                😎
              </span>
            </a>
          </div>

          <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
            
          </div>

          <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li className="flex-1 md:flex-none md:mr-3">
                <div className="relative inline-block">
                  <button
                    onClick={() => toggleDD("myDropdown")}
                    className="drop-button text-white py-2 px-2"
                  >
                    {" "}
                    <span className="pr-2">
                      <i className="em em-robot_face"></i>
                    </span>{" "}
                    Hi, User{" "}
                    <svg
                      className="h-3 fill-current inline"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <div
                    id="myDropdown"
                    className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible"
                  >
                  
                    <div className="border border-gray-800"></div>
                    <a
                      href="#"
                      className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                    >
                      <i className="fas fa-sign-out-alt fa-fw"></i> Log Out
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>             
    </header>
  );
}

export default HeaderComp;
