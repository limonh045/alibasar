import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import { BsBellFill, BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";
import bell from "../../img/bell.jpeg"
import Image from "next/image";
function index() {
  const route = useRouter();

  const handleBack = () => {
    route.back();
  };

  return (
    <div className="header">
           <div className="h-12 bg-[#FFFFFF]/90  border-b-2 border-gray-100 flex items-center justify-between px-10 text-[#939393]">
        <div className="flex items-center gap-2">
          <p className="text-xl">
            <HiArrowNarrowLeft
              onClick={() => handleBack()}
              className=" cursor-pointer"
            />
          </p>
          <p className="text-xl">
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
          </p>
          <p className="text-[0.65rem] font-bold">24 03 Overview Page</p>
        </div>
        <p className="text-[0.75rem] ml-[-160px] font-bold">
          24-03 Original New 
        </p>
        <p className="text-xl">
        <Image
                src={bell}
                height={35}
                width={35}
                alt="bell__icon"
                
              />
        </p>
      </div>
      


      <div className=" p-3 flex justify-between px-[3rem]  flex-wrap sub__header">
        <div className=" flex  space-x-4 text-[.9rem]">
          <p className="px-4 rounded-md py-2">Preview</p>
          <p className="px-4 rounded-md py-2">Hide Column</p>
        </div>
        <div>
          <ul className=" flex space-x-5 text-[.9rem]">
            <li className="px-4 rounded-md py-2">Edit Data-request</li>
            <li className="px-4 rounded-md py-2">Import File </li>
            <li className="px-4 rounded-md py-2">Update </li>
            <li className="px-4 rounded-md py-2">Close list </li>
            <li
              className="px-4 rounded-md py-2 bg-[#F3F3F3]
]"
            >
              Publish
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default index;
