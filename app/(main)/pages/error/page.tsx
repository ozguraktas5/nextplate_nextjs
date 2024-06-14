import { buttonVariants } from "@/components/ui/button"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <main>
      <section className="p-32">
        <div className="flex flex-col justify-center items-center gap-5 container">
          <span className="text-9xl font-bold mt-24">404</span>
          <h1 className="text-4xl font-bold">Page not found</h1>
          <p>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <div>
            <Button variant="outline">
              <Link href="/">Back To Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
