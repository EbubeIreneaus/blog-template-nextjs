import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'
import HeaderComp from "../component/admin/HeaderComp";
import FooterComp from "../component/admin/FooterComp";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
    <HeaderComp />
    { children }
    <FooterComp />
    </div>
  );
}

export default layout;
