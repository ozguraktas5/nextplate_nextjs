"use client";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import menuItems from "./menu.json";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Navbar expand="lg" bg="white" data-bs-theme="white" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/" as={Link}>
          <Image
            src="/images/logo.png"
            alt="Nextplate"
            width={200}
            height={35}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((item) => (
              <Nav.Link key={item.id} href={item.url} as={Link}>
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
