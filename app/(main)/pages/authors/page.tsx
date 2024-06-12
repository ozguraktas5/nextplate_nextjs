import { BreadcrumbWithCustomSeparator } from "@/components/BreadcrumbWithCustomSeparator";
import Image from "next/image";
import React from "react";
import avatar from "../../../../public/images/avatar.png";

const AuthorsPage = () => {
  return (
    <main>
      <section className="flex flex-col items-center bg-gray-100 p-24">
        <h1 className="text-5xl pt-24 font-bold mb-3">Authors</h1>
        <BreadcrumbWithCustomSeparator text="Authors" />
      </section>

      <section className="flex gap-5 px-32 mt-5">
        <div className="flex flex-col items-center p-4 justify-center gap-4 bg-gray-100">
          <Image
            src={avatar}
            className="mx-auto mt-40"
            alt="avatar"
            width={150}
            height={150}
          />
          <h2 className="text-3xl font-bold">John Doe</h2>
          <p className="w-1/2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 bg-gray-100">
          <Image
            src={avatar}
            className="mx-auto mt-40"
            alt="avatar"
            width={150}
            height={150}
          />
          <h2 className="text-3xl font-bold">Sam Wilson</h2>
          <p className="w-1/2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 bg-gray-100">
          <Image
            src={avatar}
            className="mx-auto mt-40"
            alt="avatar"
            width={150}
            height={150}
          />
          <h2 className="text-3xl font-bold">William Jacob</h2>
          <p className="w-1/2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.  
          </p>
        </div>
      </section>
    </main>
  );
};

export default AuthorsPage;
