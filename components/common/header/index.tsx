"use client"

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
    <Navbar
      className="fixed z-10 w-full bg-white dark:bg-black"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="/" as={Link}>
          <div className="relative w-[200px] h-[35px]">
            <Image
              src={"/images/logo.png"}
              alt="Nextplate"
              layout="fill"
              className="dark:hidden"
            />
            <Image
              src={"/images/logo-darkmode.png"}
              alt="Nextplate Dark"
              layout="fill"
              className="hidden dark:block"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((item) => (
              <Nav.Link
                key={item.id}
                href={item.url}
                as={Link}
                className="text-black dark:text-white"
              >
                {item.title}
              </Nav.Link>
            ))}
            <NavDropdown
              title="Pages"
              id="basic-nav-dropdown"
              className="text-black dark:text-white"
            >
              <NavDropdown.Item
                href="/pages/contact"
                as={Link}
                className="text-black dark:text-white"
              >
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/pages/blog"
                as={Link}
                className="text-black dark:text-white"
              >
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/pages/authors"
                as={Link}
                className="text-black dark:text-white"
              >
                Authors
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/pages/categories"
                as={Link}
                className="text-black dark:text-white"
              >
                Categories
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/pages/tags"
                as={Link}
                className="text-black dark:text-white"
              >
                Tags
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/pages/error"
                as={Link}
                className="text-black dark:text-white"
              >
                404 Page
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="flex gap-2">
          <SearchModal />
          <ModeToggle />
          <SelectDemo />
          <ButtonOutline text="Get Started" />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
