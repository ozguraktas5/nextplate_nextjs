"use client";
import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import menuItems from "./menu.json";
import Image from "next/image";
import Link from "next/link";
import SearchModal from "@/components/SearchModal";
import { ModeToggle } from "@/components/ModeToggle";
import { SelectDemo } from "@/components/SelectDemo";
import { ButtonOutline } from "@/components/ButtonOutline";

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
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="/pages/contact" as={Link}>
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/blog" as={Link}>
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/authors" as={Link}>
                Authors
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/categories" as={Link}>
                Categories
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/tags" as={Link}>
                Tags
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/error" as={Link}>
                404 Page
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <SearchModal />
        <ModeToggle />
        <SelectDemo />
        <ButtonOutline text="Get Started" />
      </Container>
    </Navbar>
  );
};

export default Header;
