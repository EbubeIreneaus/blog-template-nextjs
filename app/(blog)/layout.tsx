import React from "react";
import HeaderComponent from "../component/blog/HeaderComponent";
import FooterSection from "../component/blog/FooterSection";


function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <HeaderComponent />

        {children}

        <FooterSection />
      </body>
    </html>
  );
}

export default Layout;
