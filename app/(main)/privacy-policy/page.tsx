import { BreadcrumbWithCustomSeparator } from "@/components/BreadcrumbWithCustomSeparator";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <main>
      <section className="flex flex-col items-center bg-gray-100 p-24 dark:bg-gray-950">
        <h1 className="text-5xl pt-24 font-bold mb-3">Privacy</h1>
        <BreadcrumbWithCustomSeparator text="Privacy Policy" />
      </section>

      <section className="flex flex-col gap-4 container mt-40">
        <h4 className="text-3xl font-bold">Responsibility of Contributors</h4>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec
          nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis
          sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim
          fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis
          erat sagittis in tortor cursus. Molestie urna eu tortor, erat
          scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis
          viverra sed
        </p>
        <p className="text-lg">
          pretium, aliquam sit. Praesent elementum magna amet, tincidunt eros,
          nibh in leo. Malesuada purus, lacus, at aliquam suspendisse tempus.
          Quis tempus amet, velit nascetur sollicitudin. At sollicitudin eget
          amet in. Eu velit nascetur sollicitudin erhdfvssfvrgss eget viverra
          nec elementum. Lacus, facilisis tristique lectus in.
        </p>
        <h4 className="text-3xl font-bold">Gathering of Personal Information</h4>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec
          nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis
          sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim
          fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis
          erat sagittis in tortor cursus. Molestie urna eu tortor, erat
          scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis
          viverra sed
        </p>
        <h4 className="text-3xl font-bold">Protection of Personal- Information</h4>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec
          nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis
          sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim
          fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis
          erat sagittis in tortor cursus. Molestie urna eu tortor, erat
          scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis
          viverra sed Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Purus, donec nunc eros, ullamcorper id feugiat
        </p>
        <h4 className="text-3xl font-bold">
          Privacy Policy Changes
        </h4>
        <ol className="list-decimal pl-5">
          <li className="text-lg">Sll the Themefisher items are designed to be with the latest , We check all</li>
          <li className="text-lg">comments that threaten or harm the reputation of any person or organization</li>
          <li className="text-lg">personal information including, but limited to, email addresses, telephone numbers</li>
          <li className="text-lg">Any Update come in The technology Customer will get automatic Notification.</li>
        </ol>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
