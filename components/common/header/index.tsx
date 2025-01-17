"use client";

import React, { useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import menuItems from "./menu.json";
import Image from "next/image";
import Link from "next/link";
import SearchModal from "@/components/SearchModal";
import { ModeToggle } from "@/components/ModeToggle";
import { ButtonOutline } from "@/components/ButtonOutline";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Navbar
      className={`fixed z-10 w-full ${darkMode ? "dark:bg-black" : "bg-white"}`}
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
          <div className="flex gap-4 items-center me-auto ml-20">
            {menuItems.map((item) => (
              <Nav.Link key={item.id} href={item.url} as={Link}>
                {item.title}
              </Nav.Link>
            ))}
            <NavDropdown
              title="Pages"
              id="basic-nav-dropdown"
              className={`${darkMode ? "dark-dropdown" : "light-dropdown"}`}
            >
              <NavDropdown.Item
                href="/pages/contact"
                as={Link}
                className={darkMode ? "dark-item" : "light-item"}
              >
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/pages/blog"
                as={Link}
                className={darkMode ? "dark-item" : "light-item"}
              >
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/pages/authors"
                as={Link}
                className={darkMode ? "dark-item" : "light-item"}
              >
                Authors
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/pages/categories"
                as={Link}
                className={darkMode ? "dark-item" : "light-item"}
              >
                Categories
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/pages/tags"
                as={Link}
                className={darkMode ? "dark-item" : "light-item"}
              >
                Tags
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/pages/error"
                as={Link}
                className={darkMode ? "dark-item" : "light-item"}
              >
                404 Page
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
        <div className="flex gap-2">
          <SearchModal darkMode={darkMode} />
          <ModeToggle setDarkMode={setDarkMode} />
          <ButtonOutline text="Get Started" />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
