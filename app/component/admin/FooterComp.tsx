import Link from "next/link";
import React from "react";

function FooterComp() {
  return (
    <div className="w-full fixed bottom-1 left-0">
      <div className="max-w-xl w-full bg-gray-500 mx-auto rounded-tr-lg rounded-tl-lg">
        <ul className="flex justify-between items-center py-3  px-10 *:text-slate-200">
          <Link href="/admin/" className="group w-full">
            <li className="flex flex-col items-center">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </li>
            <span className="border-2 border-red-300 w-0 block invisible transition-all duration-300 ease-linear group-hover:w-full group-hover:visible"></span>
          </Link>
          <Link href="/admin/blog/new" className="group w-full">
            <li className="flex flex-col items-center">
              <i className="fas fa-newspaper"></i>
              <span>Blog</span>
              <span className="border-2 border-red-300 w-0 block invisible transition-all duration-300 ease-linear group-hover:w-full group-hover:visible"></span>

            </li>
          </Link>
          <Link href="/admin/blog/new" className="group w-full">
            <li className="flex flex-col items-center">
              <i className="fas fa-message"></i>
              <span>Comments</span>
            </li>
            <span className="border-2 border-red-300 w-0 block invisible transition-all duration-300 ease-linear group-hover:w-full group-hover:visible"></span>

          </Link>
          <Link href="/admin/blog/new" className="group w-full">
            <li className="flex flex-col items-center">
              <i className="fas fa-lock"></i>
              <span>Logout</span>
            </li>
            <span className="border-2 border-red-300 w-0 block invisible transition-all duration-300 ease-linear group-hover:w-full group-hover:visible"></span>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default FooterComp;
