import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex-grow-1">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
