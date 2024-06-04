import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { Container } from "react-bootstrap";
import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container className="flex-grow-1">{children}</Container>
      <Footer />
    </>
  );
};

export default MainLayout;
