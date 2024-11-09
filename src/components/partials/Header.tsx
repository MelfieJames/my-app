"use client";

import React, { useState } from "react";
import Link from "next/link";
import AddServiceModal from "../common/AddServiceModal"; // Correct relative path

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const openModal = () => setIsModalOpen(true); // Open the modal
  const closeModal = () => setIsModalOpen(false); // Close the modal

  // Add service function to handle adding service
  const addService = (service: { name: string; description: string; image: string }) => {
    // You can add the logic here for adding the service to the state or list
    console.log("Service added:", service);
  };

  return (
    <header
      className={`bg-black p-4 shadow-md transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-100"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Updated logo image */}
          <img
            src="https://cdn-icons-png.freepik.com/512/5670/5670186.png"
            alt="PelTech Logo"
            className={`w-8 h-8 transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />
          <h1
            className={`text-2xl font-bold transition-opacity duration-300 ${
              isVisible ? "text-white" : "opacity-0"
            }`}
          >
            PelTech
          </h1>
        </div>

        <nav>
          <ul className="flex space-x-6 items-center">
            <li className="flex items-center">
              <Link
                href="/"
                className={`flex items-center hover:text-gray-200 transition-opacity duration-300 ${
                  isVisible ? "text-white" : "opacity-0"
                }`}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Home_icon_grey.png"
                  alt="Home Icon"
                  className="w-5 h-5 mr-2"
                />
                Home
              </Link>
            </li>
            <div
              className={`border-l border-gray-600 h-6 transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            />
            <li className="flex items-center">
              <Link
                href="/about"
                className={`flex items-center hover:text-gray-200 transition-opacity duration-300 ${
                  isVisible ? "text-white" : "opacity-0"
                }`}
              >
                <img
                  src="https://www.freeiconspng.com/thumbs/information-icon/info-icon--6.png"
                  alt="About Icon"
                  className="w-5 h-5 mr-2"
                />
                About
              </Link>
            </li>
            <div
              className={`border-l border-gray-600 h-6 transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            />
            <li className="flex items-center">
              <Link
                href="/contact"
                className={`flex items-center hover:text-gray-200 transition-opacity duration-300 ${
                  isVisible ? "text-white" : "opacity-0"
                }`}
              >
                <img
                  src="https://www.pngkey.com/png/full/51-512421_contact-us-message-icons-email-icon.png"
                  alt="Contact Icon"
                  className="w-5 h-5 mr-2"
                />
                Contact Us
              </Link>
            </li>

            {/* Add Services Button */}
            <li
              className={`flex items-center transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <button
                onClick={openModal} // Open modal on click
                className="flex items-center text-white hover:text-gray-200"
              >
                {/* Add icon for Add Service */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add Service
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Modal */}
      {isModalOpen && <AddServiceModal closeModal={closeModal} addService={addService} />}
    </header>
  );
};

export default Header;
