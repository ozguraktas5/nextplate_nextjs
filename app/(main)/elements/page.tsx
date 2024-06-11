import { BreadcrumbWithCustomSeparator } from "@/components/BreadcrumbWithCustomSeparator";
import React from "react";

const ElementsPage = () => {
  const htmlItemsString = `
    <li class="nav-item">
      <a class="nav-link" href="/">
        Home
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="about/">
        About
      </a>
    </li>`;

  const cssItemsString = `
    img {
    vertical-align: middle;
    border: 0;
    max-width: 100%;
    height: auto;
    }`;

  const jsItemsString = `
    window.addEventListener("load", (e) => {
      document.querySelector(".preloader").style.display = "none";
    });`;

  return (
    <main>
      <section className="flex flex-col items-center bg-gray-100 p-24">
        <h1 className="text-5xl pt-24 font-bold mb-3">Elements</h1>
        <BreadcrumbWithCustomSeparator text="Elements" />
      </section>

      <section className="flex flex-col gap-5 container mt-20">
        <h1 className="text-6xl font-bold">Heading 1</h1>
        <h2 className="text-5xl font-bold">Heading 2</h2>
        <h3 className="text-4xl font-bold">Heading 3</h3>
        <h4 className="text-3xl font-bold">Heading 4</h4>
        <h5 className="text-2xl font-bold">Heading 5</h5>
        <h6 className="text-xl font-bold">Heading 6</h6>
        <hr className="text-gray-400" />
        <h3 className="text-3xl font-bold">Paragraph</h3>
        <p>
          Did you come here for something in particular or just general
          Riker-bashing? And blowing into maximum warp speed, you appeared for
          an instant to be in two places at once. We have a saboteur aboard. We
          know you’re dealing in stolen ore. But I wanna talk about the
          assassination attempt on Lieutenant Worf. Could someone survive inside
          a transporter buffer for 75 years? Fate. It protects fools, little
          children, and ships.
        </p>
        <p>
          Did you come here for something in particular or just general
          Riker-bashing? And blowing into maximum warp speed, you appeared for
          an instant to be in two places at once. We have a saboteur aboard. We
          know you’re dealing in stolen ore. But I wanna talk about the
          assassination attempt on Lieutenant Worf. Could someone survive inside
          a transporter buffer for 75 years? Fate. It protects fools, little
          children, and ships.
        </p>
        <hr className="text-gray-400" />
        <h3 className="text-3xl font-bold">Emphasis</h3>
        <ol className="flex flex-col gap-4 list-decimal pl-5">
          <li>
            Did you come here for something in <strong> particular</strong> or
            just general
          </li>
          <li>
            Did you come here for something in{" "}
            <span className="underline">particular</span>
          </li>
          <li>
            <span className="italic">Did you come here</span>
          </li>
          <li>
            Did you come here for <strong>something</strong> in particular
          </li>
          <li>Did you come here for something in particular</li>
          <li>Did you come here for something in particular</li>
          <li>
            URLs and URLs in angle brackets will automatically get turned into
            links. <a href="http://www.example.com">http://www.example.com</a>{" "}
          </li>
          <li>
            <a href="http://www.example.com" className="underline">
              http://www.example.com
            </a>{" "}
            and sometimes example.com (but not on Github, for example).
          </li>
        </ol>
        <hr className="text-gray-400" />
        <h3 className="text-3xl font-bold">Link</h3>
        <p>
          <a href="https://www.google.com" className="underline">
            I'm an inline-style link
          </a>
        </p>
        <p>
          <a href="https://www.google.com" className="underline">
            I'm an inline-style link with title
          </a>
        </p>
        <p>
          <a href="https://www.google.com" className="underline">
            I'm a reference-style link
          </a>
        </p>
        <p>
          <a href="https://www.google.com" className="underline">
            I'm a relative reference to a repository file
          </a>
        </p>
        <p>
          <a href="https://www.google.com" className="underline">
            You can use numbers for reference-style link definitions
          </a>
        </p>
        <p>
          Or leave it empty and use the{" "}
          <a href="https://www.google.com" className="underline">
            link text itself
          </a>
        </p>
        <p>example.com (but not on Github, for example).</p>
        <p>Some text to show that the reference links can follow later.</p>
        <hr className="text-gray-400" />
        <h3 className="text-3xl font-bold">Ordered List</h3>
        <ol className="flex flex-col gap-4 list-decimal pl-5">
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ol>
        <hr className="text-gray-400" />
        <h3 className="text-3xl font-bold">Unordered List</h3>
        <ul className="flex flex-col gap-4 list-disc pl-5">
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ul>
        <h4 className="text-4xl font-bold">Code and Syntax Highlighting</h4>
        <h3 className="text-3xl font-bold">HTML</h3>
        <pre>
          <code>
            <ul className="bg-gray-100 p-1">{htmlItemsString}</ul>
          </code>
        </pre>
        <h3 className="text-3xl font-bold">CSS</h3>
        <pre>
          <code>
            <ul className="bg-gray-100 p-1">{cssItemsString}</ul>
          </code>
        </pre>
        <h3 className="text-3xl font-bold">Javascript</h3>
        <pre>
          <code>
            <ul className="bg-gray-100 p-1">{jsItemsString}</ul>
          </code>
        </pre>
      </section>
    </main>
  );
};

export default ElementsPage;
