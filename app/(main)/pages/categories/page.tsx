import { BreadcrumbWithCustomSeparator } from "@/components/BreadcrumbWithCustomSeparator";
import React from "react";

const CategoriesPage = () => {
  return (
    <main>
      <section className="flex flex-col items-center bg-gray-100 p-24 dark:bg-gray-950">
        <h1 className="text-5xl pt-24 font-bold mb-3">Categories</h1>
        <BreadcrumbWithCustomSeparator text="Categories" />
      </section>

      <section>
        <div>
          <ul className="flex flex-wrap justify-center mt-32 gap-5">
            <li>
              <a href="" className="bg-gray-100 text-xl px-10 py-3 rounded-xl">
                Application <span className="ml-3 px-3 bg-gray-50">1</span>{" "}
              </a>
            </li>
            <li>
              <a href="" className="bg-gray-100 text-xl px-10 py-3 rounded-xl">
                Data <span className="ml-3 px-3 bg-gray-50">2</span>{" "}
              </a>
            </li>
            <li>
              <a href="" className="bg-gray-100 text-xl px-10 py-3 rounded-xl">
                Technology <span className="ml-3 px-3 bg-gray-50">1</span>{" "}
              </a>
            </li>
            <li>
              <a href="" className="bg-gray-100 text-xl px-10 py-3 rounded-xl">
                Software <span className="ml-3 px-3 bg-gray-50">1</span>{" "}
              </a>
            </li>
            <li>
              <a href="" className="bg-gray-100 text-xl px-10 py-3 rounded-xl">
                Architecture <span className="ml-3 px-3 bg-gray-50">1</span>{" "}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default CategoriesPage;
