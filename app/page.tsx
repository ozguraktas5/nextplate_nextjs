import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { Container } from "react-bootstrap";
import React from "react";
import HomePage from "@/components/homepage";

const HomeLayout: React.FC = () => {
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
