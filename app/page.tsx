import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { Container } from "react-bootstrap";
import React, { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container className="flex-grow-1">{children}</Container>
      <Footer />
    </>
  );
};

export default HomeLayout;
