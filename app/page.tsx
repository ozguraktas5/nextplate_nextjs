import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { Container } from "react-bootstrap";
import React, { ReactNode } from "react";
import HomePage from "@/components/homepage";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = () => {
  return (
    <>
      <Header />
      <Container className="flex-grow-1">
        <HomePage />
      </Container>
      <Footer />
    </>
  );
};

export default HomeLayout;
