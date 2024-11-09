import React from "react";
import MainLayouts from "@/components/layouts/MainLayouts";

const ContactPage: React.FC = () => {
  return (
    <MainLayouts>
      <div
        className="py-12 px-6 overflow-y-auto" // Add overflow-y-auto for vertical scrolling
        style={{
          maxWidth: "100vw",
          maxHeight: "79vh",
          margin: "0 auto",
          backgroundImage: "url('https://64.media.tumblr.com/6c528dab5498d431a101acd4398160b4/tumblr_o7vrxl8Uk11runoqyo10_540.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white", // Set text color to white
        }}
      >
        <h1 className="text-4xl font-bold mb-6 font-georgia">Contact Us</h1>
        <p className="text-lg mb-4 font-georgia">
          We’d love to hear from you! At <strong>PelTech</strong>, your feedback is important to us. Whether you have questions, need assistance, or just want to connect, we’re here to help.
        </p>
        <h2 className="text-3xl font-semibold mt-6 mb-2 font-georgia">
          How to Reach Us
        </h2>
        <ul className="list-disc ml-6 mb-4 font-georgia">
          <li>
            Email:{" "}
            <a
              href="mailto:support@peltech.com"
              className="text-blue-400 hover:underline"
            >
              support@peltech.com
            </a>
          </li>
          <li>
            Phone: <strong>(234) 567-8901</strong> (Mon-Fri, 9 AM - 5 PM EST)
          </li>
          <li>
            Social Media:
            <ul className="list-inside list-disc ml-4">
              <li>
                <a
                  href="https://www.instagram.com/melfiejamesantonio/"
                  className="text-blue-400 hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/melfiejames.antonio/"
                  className="text-blue-400 hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/melfie77301"
                  className="text-blue-400 hover:underline"
                >
                  X (formerly Twitter)
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="text-3xl font-semibold mt-6 mb-2 font-georgia">
          Visit Us
        </h2>
        <p className="text-lg mb-4 font-georgia">
          If you’re nearby, come visit our store for personalized recommendations!
        </p>
        <p className="text-lg mb-4 font-georgia">
          <strong>Address:</strong> 123 Repair Lane, Akron, Ohio, Cleveland
        </p>
        <p className="text-lg mb-4 font-georgia">
          Thank you for choosing <strong>PelTech</strong>! We look forward to connecting with you!
        </p>
      </div>
    </MainLayouts>
  );
};

export default ContactPage;
