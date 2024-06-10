import React from "react";
import avatar from "../../../public/images/avatar.png";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image
        src={avatar}
        className="mx-auto mt-40"
        alt="avatar"
        width={270}
        height={270}
      />
      <h2 className="text-3xl font-bold">Hey, I am John Doe!</h2>
      <p className="w-1/2 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum
        nesciunt commodi vel nisi ut alias excepturi ipsum, totam, labore
        tempora, odit ex iste tempore sed. Fugit voluptatibus perspiciatis
        assumenda nulla ad nihil, omnis vel, doloremque sit quam autem optio
        maiores, illum eius facilis et quo consectetur provident dolor
        similique! Enim voluptatem dicta expedita veritatis repellat dolorum
        impedit, provident quasi at.
      </p>
    </div>
  );
};

export default AboutPage;
