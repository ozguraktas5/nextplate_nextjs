import { BreadcrumbWithCustomSeparator } from "@/components/BreadcrumbWithCustomSeparator";
import { ButtonOutline } from "@/components/ButtonOutline";
import { TabsDemo } from "@/components/TabsDemo";
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
        <hr className="text-gray-400" />
        <h3 className="text-3xl font-bold">Button</h3>
        <div>
          <ButtonOutline text="Button" />
        </div>
        <h3 className="text-3xl font-bold">Quote</h3>
        <blockquote className="border-black rounded-xl border-t-2 border-r-2 border-b-2 border-l-8 p-5 bg-gray-100">
          <p className="font-bold">
            "Did you come here for something in particular or just general
            Riker-bashing? And blowing into maximum warp speed, you appeared for
            an instant to be in two places at once."
          </p>
        </blockquote>
        <h3 className="text-3xl font-bold">Notice</h3>
        <blockquote className="border-sky-400 rounded-xl border-2 p-5">
          <div className="flex items-center gap-4 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-info-circle text-sky-600"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            <span className="text-xl font-bold">Note</span>
          </div>
          <p>"This is a simple note."</p>
        </blockquote>
        <blockquote className="border-emerald-400 rounded-xl border-2 p-5">
          <div className="flex items-center gap-4 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-check-circle text-emerald-400"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </svg>
            <span className="text-xl font-bold">Tip</span>
          </div>
          <p>"This is a simple note."</p>
        </blockquote>
        <blockquote className="border-orange-400 rounded-xl border-2 p-5">
          <div className="flex items-center gap-4 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-exclamation-triangle text-orange-400"
              viewBox="0 0 16 16"
            >
              <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
              <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
            </svg>
            <span className="text-xl font-bold">Info</span>
          </div>
          <p>"This is a simple note."</p>
        </blockquote>
        <blockquote className="border-red-400 rounded-xl border-2 p-5">
          <div className="flex items-center gap-4 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-x-circle text-red-400"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
            <span className="text-xl font-bold">Warning</span>
          </div>
          <p>"This is a simple note."</p>
        </blockquote>
        <h3 className="text-3xl font-bold">Tab</h3>
        <TabsDemo />
      </section>
    </main>
  );
};

export default ElementsPage;
