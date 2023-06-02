"use client";

import { BiSearch } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { Tooltip, Button } from "@material-tailwind/react";

import Image from "next/image";
import bell from "../img/bell.jpeg";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState(false);
  const [search, setSearch] = useState(false);

  const handleMenu = () => {
    setOpen(true);
  };

  return (
    <div className="grid grid-cols-10 xl:grid-cols-8 px-4 xl:px-0 w-full min-h-screen relative overflow-x-hidden">
      {/* left side */}

      {/* mobile device */}

      {open ? (
        <div
          className={` 
          max-w-[12rem] 
       absolute   bg-[#464545] xl:hidden transition-all duration-300  left-0 z-[40] min-h-screen text-white pl-8`}
        >
          <FaTimes
            className=" absolute top-5 right-5  cursor-pointer"
            onClick={() => setOpen(false)}
          />
          <h3 className="pt-5 pb-14 text-lg text-[#FFB320]">Alibasar</h3>
          <div className="text-sm space-y-4">
            <p className="font-bold">Compare List</p>
            <ul className="list-disc font-bold list-inside">
              <li className="list-style font-bold">
                Create list
                <span className="text-white bg-[#FFB320] mx-1 px-0.5">+</span>
              </li>
              <li className="list-style">
                My list
                <span className="text-white bg-[#FF9292] px-1.5 mx-1 rounded text-xs">
                  New
                </span>
              </li>
              <li className="list-style">Participated list</li>
            </ul>
            <p className="font-semibold">Webshop</p>
            <p className="tracking-widest font-medium ">Explore</p>
          </div>

          {/* user part */}
          <p className="absolute bottom-14 left-10 text-3xl text-[#9D9D9D] z-10">
            <BiUserCircle />
          </p>
        </div>
      ) : (
        ""
      )}

      {/* {large device} */}
      <div
        className={
          "  xl:block border-r border-[#D8D8D8] bg-[#E9E9E9] max-w-[12rem] pl-7 space-y-4 hidden "
        }
      >
        <h3 className="pt-5 pb-14 text-lg text-[#FFB320]">Alibasar</h3>
        <div className="text-sm space-y-4">
          <p className="font-bold">Compare List</p>
          <ul className="list-disc  list-inside">
            <li className="list-style">
              Create list
              <span className="text-white bg-[#FFB320] mx-1 px-0.5">+</span>
            </li>
            <li className="list-style">
              My list
              <span className="text-white bg-[#FF9292] px-1.5 mx-1 rounded text-xs">
                New
              </span>
            </li>
            <li className="list-style">Participated list</li>
          </ul>
          <p className="font-semibold">Webshop</p>
          <p className="tracking-widest font-medium ">Explore</p>
        </div>

        {/* user part */}
        <p className="absolute bottom-14 left-10 text-3xl text-[#9D9D9D] z-10">
          <BiUserCircle />
        </p>
      </div>

      {/* right side */}

      <div
        className={
          open
            ? " xl:col-span-6 relative col-span-10"
            : " xl:col-span-7 relative col-span-10"
        }
      >
        <div className="text-[#929292] flex justify-between py-2 border-b">
          <div>
            <span
              onClick={() => handleMenu()}
              className="xl:hidden block text-xl cursor-pointer z-50"
            >
              <FaBars />
            </span>
          </div>
          <p>My list</p>

          <div className="flex gap-2 px-10 justify-center items-center text-xl">
            <div className="w-[12rem] relative   transition-all duration-500">
              <span
                onClick={() => setSearch(true)}
                className={`
                
                absolute 
                
               top-2
               
  
  
                 right-2 text-[#939393] text-[1.2rem] block  cursor-pointer`}
              >
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="6.16663"
                    cy="6.625"
                    rx="5"
                    ry="5.25"
                    fill="#7E869E"
                    fill-opacity="0.25"
                    stroke="#A3A3A3"
                    stroke-width="1.2"
                  />
                  <path
                    d="M13.6666 14.5L11.1666 11.875"
                    stroke="#222222"
                    stroke-width="1.2"
                    stroke-linecap="round"
                  />
                </svg>
              </span>

              {/* <BiSearch
                
              /> */}

              <input
                type="text"
                className={`
                   transition-all duration-300
                 rounded-md 
                  

                 ${search ? "visible w-full" : " invisible w-0"}
                   text-black
                  bg-[#dddddd]  text-[.8rem] focus:border-none py-1  outline-none border-none px-2
                  
                  `}
                placeholder="search here..."
              />
            </div>

            <div className="relative w-5" onClick={() => setPopup(!popup)}>
              <span className="bell-round    top-[.4rem] -mr-1 block absolute "></span>

              <Image
                src={bell}
                height={100}
                width={100}
                alt="bell"
                className="min-h-[35px] min-w-[35px]"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 px-2 sm:px-10  py-2 border-b text-[0.75rem] sm:text-sm gap-5 sm:gap-10 text-[#D7D7D7]">
          <div className="col-span-5 xl:col-span-6">
            <p>Name</p>
          </div>
          <div className="col-span-1">
            <p>Row(s)</p>
          </div>
          <div className="col-span-2 xl:col-span-1">
            <p className="flex justify-start items-center">
              |<AiOutlineDown />
              Suppliers
            </p>
          </div>
          <div className="col-span-3">
            <p className="flex justify-start items-center">
              |<AiOutlineDown />
              Date
            </p>
          </div>
          <div className="col-span-1">
            <p className="flex justify-center items-center ">
              |<AiOutlineDown />
              Status
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 px-2 sm:px-10 py-2 text-[0.75rem] sm:text-sm gap-5 sm:gap-10 text-[#D7D7D7] hover:bg-[#F8F8F8] duration-300">
          <div className="col-span-5 xl:col-span-6 relative table-colum ">
            <div className="popup space-y-1 opacity-0 hidden py-4 text-gray-50/50">
              <div className="flex justify-between items-center hover:bg-[#A3A2A2]/20 duration-300 px-4 pb-1">
                <p className="text-xs">View</p>
                <p className="text-[0.65rem] mr-[28px] text-[#929292]">
                  • One overview of all suppliers
                </p>
              </div>
              <p className="px-4 pb-1 hover:bg-[#A3A2A2]/20 duration-300 text-[0.70rem] ">
                Edit
              </p>
              <div className="flex  pb-1 justify-between items-center hover:bg-[#A3A2A2]/20 duration-300 px-4 border-b border-[#A3A2A2]/20 pb-1">
                <p className="text-[0.70rem]">Webpage </p>
                <p className="text-[0.65rem] text-[#929292]">
                  • Share this page with your suppliers
                </p>
              </div>
              <Link
                href="/compare-results"
                className="px-4 pb-1 hover:bg-[#A3A2A2]/20 duration-300 text-[0.70rem] py-1 border-b border-[#A3A2A2]/20 block"
              >
                Compare Results
              </Link>
              <p className="px-4 pb-1 hover:bg-[#A3A2A2]/20 duration-300 text-[0.70rem]">
                Close List
              </p>
            </div>

            <p className="flex gap-2 items-center text-black">
              <span className="text-[#E5CB96] text-xl">
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 3H16C17.1046 3 18 3.89543 18 5H0V3Z"
                    fill="#E6CB96"
                  />
                  <path
                    d="M0 6H18V10.2C18 11.8802 18 12.7202 17.673 13.362C17.3854 13.9265 16.9265 14.3854 16.362 14.673C15.7202 15 14.8802 15 13.2 15H4.8C3.11984 15 2.27976 15 1.63803 14.673C1.07354 14.3854 0.614601 13.9265 0.32698 13.362C0 12.7202 0 11.8802 0 10.2V6Z"
                    fill="#767676"
                  />
                  <path
                    d="M0 3C0 2.06812 0 1.60218 0.152241 1.23463C0.355229 0.744577 0.744577 0.355229 1.23463 0.152241C1.60218 0 2.06812 0 3 0H5.34315C6.16065 0 6.5694 0 6.93694 0.152241C7.30448 0.304482 7.59351 0.593512 8.17157 1.17157L10 3H0Z"
                    fill="#E6CB96"
                  />
                </svg>
              </span>
              24-03 Original New
            </p>
          </div>
          <div className="col-span-1">
            <p className="flex justify-center items-center text-[#A3A2A2]">
              45
            </p>
          </div>
          <div className="col-span-2 xl:col-span-1">
            <p className="flex justify-start items-center gap-1 sm:gap-3 text-[#A3A2A2]">
              17
              <span className="text-white bg-[#FF9292] px-1.5 rounded text-xs">
                New
              </span>
            </p>
          </div>
          <div className="col-span-3">
            <p className="flex justify-center items-center text-[#A3A2A2]">
              45 17 23 Mar 2022 at 12:04
            </p>
          </div>
          <div className="col-span-1">
            <p className="flex justify-center items-center text-[#6BA557]">
              Active
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 px-2 sm:px-10 py-2 text-[0.75rem] sm:text-sm gap-5 sm:gap-10 text-[#D7D7D7] hover:bg-[#F8F8F8] duration-300">
          <div className="col-span-5  xl:col-span-6 relative table-colum ">
            <div className="popup space-y-1 opacity-0 hidden py-4 text-gray-50/50">
              <div className="flex pb-1 justify-between items-center hover:bg-[#A3A2A2]/20 duration-300 px-4">
                <p className="text-xs">View</p>
                <p className="text-[0.65rem] mr-[28px] text-[#929292]">
                  • One overview of all suppliers
                </p>
              </div>
              <p className="px-4 pb-1 hover:bg-[#A3A2A2]/20 duration-300 text-[0.70rem]">
                Edit
              </p>
              <div className="flex  justify-between items-center hover:bg-[#A3A2A2]/20 duration-300 px-4 border-b border-[#A3A2A2]/20 pb-1">
                <p className="text-[0.70rem]">Webpage </p>
                <p className="text-[0.65rem] text-[#929292]">
                  • Share this page with your suppliers
                </p>
              </div>
              <Link
                href="/compare-results"
                className="px-4 pb-1 hover:bg-[#A3A2A2]/20 duration-300 text-[0.70rem] py-1 border-b border-[#A3A2A2]/20 block"
              >
                Compare Results
              </Link>
              <p className="px-4 pb-1 hover:bg-[#A3A2A2]/20 duration-300 text-[0.70rem]">
                Close List
              </p>
            </div>

            <p className="flex gap-2 items-center text-black">
              <span className="text-[#E5CB96] text-xl">
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 3H16C17.1046 3 18 3.89543 18 5H0V3Z"
                    fill="#E6CB96"
                  />
                  <path
                    d="M0 6H18V10.2C18 11.8802 18 12.7202 17.673 13.362C17.3854 13.9265 16.9265 14.3854 16.362 14.673C15.7202 15 14.8802 15 13.2 15H4.8C3.11984 15 2.27976 15 1.63803 14.673C1.07354 14.3854 0.614601 13.9265 0.32698 13.362C0 12.7202 0 11.8802 0 10.2V6Z"
                    fill="#767676"
                  />
                  <path
                    d="M0 3C0 2.06812 0 1.60218 0.152241 1.23463C0.355229 0.744577 0.744577 0.355229 1.23463 0.152241C1.60218 0 2.06812 0 3 0H5.34315C6.16065 0 6.5694 0 6.93694 0.152241C7.30448 0.304482 7.59351 0.593512 8.17157 1.17157L10 3H0Z"
                    fill="#E6CB96"
                  />
                </svg>
              </span>
              24-03 Original New
            </p>
          </div>
          <div className="col-span-1">
            <p className="flex justify-center items-center text-[#A3A2A2]">
              45
            </p>
          </div>
          <div className="col-span-2 xl:col-span-1">
            <p className="flex justify-start items-center gap-1 sm:gap-3 text-[#A3A2A2]">
              17
              <span className="text-white bg-[#FF9292] px-1.5 rounded text-xs">
                New
              </span>
            </p>
          </div>
          <div className="col-span-3">
            <p className="flex justify-center items-center text-[#A3A2A2]">
              45 17 23 Mar 2022 at 12:04
            </p>
          </div>
          <div className="col-span-1">
            <p className="flex justify-center items-center text-[#6BA557]">
              Active
            </p>
          </div>
        </div>
      </div>
      {/* BELL ICON POPUP */}
      {popup ? (
        <div className="absolute bg-[#F5F5F5]  transition-all duration-300  top-10  right-[3rem] lg:right-[2rem] rounded-sm text-xl text-[#9D9D9D]">
          <div className=" w-80 h-auto border border-[#EBEBEB] rounded-md  ">
            <div className=" bg-white  px-5 pt-2 pb-1 shadow-sm">
              <div className="text-[0.68rem] leading-4 border-b py-3">
                <p>Main file : 24 - 03 Original New</p>
                <div className="flex justify-between relative text-[#1A1919] gap-2">
                  <p>A new supplier has submitted their information.</p>
                  <span className="bg-[#e13f3f]/50 right-0 rounded-full h-2 w-2 absolute top-1"></span>
                </div>
              </div>
              <div className="text-[0.68rem] leading-4 border-b py-3">
                <p>Main file : 24 - 03 Original New</p>
                <div className="flex justify-between relative text-[#1A1919] gap-2">
                  <p>A new supplier has submitted their information.</p>
                  <span className="bg-[#e13f3f]/50 right-0 rounded-full h-2 w-2 absolute top-1"></span>
                </div>
              </div>
              <div className="text-[0.68rem] leading-4 py-3 ">
                <p>
                  Main file “24 - 03 Original New with no frame just to check
                  how long it ” has been created 🥳
                </p>
                <div className="flex justify-between relative text-[#1A1919] gap-2 items-center">
                  <p>
                    A “Collecting-Page” has been created. Share this page with
                    your suppliers to collect their information.
                  </p>
                  <span className="bg-[#e13f3f]/50 right-0 rounded-full h-2 w-2 absolute top-1"></span>
                </div>
              </div>
            </div>

            <div className="  px-5  py-2">
              <div className="text-[0.68rem] leading-3 mb-2 border-[#E4E0E0] border-b py-2">
                <p>
                  Main file “24 - 03 Original New with no frame just to check
                  how long it ” has been created 🥳
                </p>
                <div className="flex justify-between py-3 relative text-[#1A1919]">
                  <p>
                    A “Collecting-Page” has been created. Share this page with
                    your suppliers to collect their information.
                  </p>
                  <span></span>
                </div>
              </div>
              <div className="text-[0.68rem] leading-3 text-[#1A1919] py-2">
                <p className=" font-bold">More</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dashboard;
