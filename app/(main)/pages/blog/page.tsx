import { BreadcrumbWithCustomSeparator } from "@/components/BreadcrumbWithCustomSeparator";
import Image from "next/image";
import React from "react";
import imagePlaceHolder from "../../../../public/images/image-placeholder.png";
import { ButtonOutline } from "@/components/ButtonOutline";
import { PaginationDemo } from "@/components/PaginationDemo";

const BlogPage = () => {
  return (
    <main className="flex flex-col gap-12">
      <section className="flex flex-col items-center bg-gray-100 p-24">
        <h1 className="text-5xl pt-24 font-bold mb-3">Blog Posts</h1>
        <BreadcrumbWithCustomSeparator text="Blog" />
      </section>

      <section className="mt-5">
        <div className="flex">
          <div className="flex flex-col gap-3">
            <Image
              src={imagePlaceHolder}
              alt="imagePlaceHolder"
              width={400}
              height={200}
            />
            <h4>
              <a href="" className="text-3xl">
                How to build an Application with modern Technology
              </a>
            </h4>
            <ul className="flex gap-3">
              <li>
                <a href="" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                  John Doe
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-folder"
                  viewBox="0 0 16 16"
                >
                  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                </svg>
                <a href="">Application,</a>
                <a href="">Data</a>
              </li>
              <li>12 June, 2024</li>
            </ul>
            <p>
              Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin
              urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum
              lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis
              neque blan
            </p>
            <div>
              <ButtonOutline text="Read More" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Image
              src={imagePlaceHolder}
              alt="imagePlaceHolder"
              width={400}
              height={200}
            />
            <h4>
              <a href="" className="text-3xl">
                How to build an Application with modern Technology
              </a>
            </h4>
            <ul className="flex gap-3">
              <li>
                <a href="" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                  John Doe
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-folder"
                  viewBox="0 0 16 16"
                >
                  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                </svg>
                <a href="">Application,</a>
                <a href="">Data</a>
              </li>
              <li>12 June, 2024</li>
            </ul>
            <p>
              Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin
              urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum
              lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis
              neque blan
            </p>
            <div>
              <ButtonOutline text="Read More" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Image
              src={imagePlaceHolder}
              alt="imagePlaceHolder"
              width={400}
              height={200}
            />
            <h4>
              <a href="" className="text-3xl">
                How to build an Application with modern Technology
              </a>
            </h4>
            <ul className="flex gap-3">
              <li>
                <a href="" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                  John Doe
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-folder"
                  viewBox="0 0 16 16"
                >
                  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                </svg>
                <a href="">Application,</a>
                <a href="">Data</a>
              </li>
              <li>12 June, 2024</li>
            </ul>
            <p>
              Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin
              urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum
              lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis
              neque blan
            </p>
            <div>
              <ButtonOutline text="Read More" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Image
              src={imagePlaceHolder}
              alt="imagePlaceHolder"
              width={400}
              height={200}
            />
            <h4>
              <a href="" className="text-3xl">
                How to build an Application with modern Technology
              </a>
            </h4>
            <ul className="flex gap-3">
              <li>
                <a href="" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                  John Doe
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-folder"
                  viewBox="0 0 16 16"
                >
                  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                </svg>
                <a href="">Application,</a>
                <a href="">Data</a>
              </li>
              <li>12 June, 2024</li>
            </ul>
            <p>
              Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin
              urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum
              lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis
              neque blan
            </p>
            <div>
              <ButtonOutline text="Read More" />
            </div>
          </div>
        </div>
        <PaginationDemo />
        <div></div>
      </section>
    </main>
  );
};

export default BlogPage;
