"use client";

import Image from "next/image";
import React from "react";
import footerMenuItems from "./footer-menu.json";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

const Footer = () => {
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
            {footerMenuItems.map((item) => (
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

export default Footer;
