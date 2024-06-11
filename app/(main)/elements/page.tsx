import { BreadcrumbWithCustomSeparator } from "@/components/BreadcrumbWithCustomSeparator";
import React from "react";

const ElementsPage = () => {
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
        <ol>
          <li>
            <span>1.</span>
            <span>Did you come here for something in particular or just general</span>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </section>
    </main>
  );
};

export default ElementsPage;
