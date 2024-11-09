"use client";

import React, { useState, useEffect } from "react";
import MainLayouts from "@/components/layouts/MainLayouts";

export default function Home() {
  // Default services to display initially
  const defaultServices = [
    {
      id: 1,
      name: "Phone Repairs",
      description: "From cracked screens to battery replacements, we handle all phone repairs efficiently.",
      imageUrl: "https://png.pngtree.com/png-vector/20230131/ourmid/pngtree-broken-phone-screen-design-png-image_6577848.png",
    },
    {
      id: 2,
      name: "Laptop Repairs",
      description: "Get your laptop back to top performance with our comprehensive repair services.",
      imageUrl: "https://png.pngtree.com/png-clipart/20230804/original/pngtree-sick-laptop-cartoon-flu-computer-repair-graphic-vector-picture-image_9517186.png",
    },
    {
      id: 3,
      name: "Printer Repairs",
      description: "Solve paper jams, connectivity issues, and more with our expert printer repair solutions.",
      imageUrl: "https://png.pngtree.com/png-vector/20240315/ormid/pngtree-fax-printer-paper-cartoon-png-image_11972386.png",
    },
    {
      id: 4,
      name: "Washing Machine & AC Repairs",
      description: "Fast and reliable repairs for washing machines and air conditioners.",
      imageUrl: "https://png.pngtree.com/png-clipart/20230917/original/pngtree-blue-washing-machine-with-a-wet-mess-on-top-clipart-vector-png-image_12271670.png",
    },
    {
      id: 5,
      name: "WiFi Vendo Solutions",
      description: "Maintain your WiFi vendo machines for smooth, uninterrupted service.",
      imageUrl: "https://png.pngtree.com/png-vector/20220615/original/pngtree-lost-wireless-connection-or-disconnected-cable-png-image_5085743.png",
    },
  ];

  const [services, setServices] = useState(defaultServices);

  useEffect(() => {
    // Fetch services from the backend on component mount
    fetch("http://localhost:3000/api/services")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((service: any) => ({
          id: service.id,
          name: service.service_name || "Unnamed Service",
          description: service.description || "No description available.",
          imageUrl: service.image_url || "default-image-url", // Provide a default image URL if image_url is undefined
        }));
        
        // Replace default services with fetched services
        setServices([...defaultServices, ...formattedData]);
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <MainLayouts>
      <div
        className="bg-cover bg-center w-[1920px] h-[1080px] mx-auto py-12 px-6"
        style={{
          backgroundImage: "url('https://64.media.tumblr.com/6c528dab5498d431a101acd4398160b4/tumblr_o7vrxl8Uk11runoqyo10_540.gif')",
          maxWidth: "99vw",
          maxHeight: "79vh",
        }}
      >
        <h1 className="text-4xl font-bold mb-2 text-center text-white" style={{ fontFamily: "Georgia, serif" }}>
          Welcome to PelTech – Your Trusted Partner for Hardware Repair
        </h1>

        <div className="flex justify-center space-x-4 mt-8">
          {services.map((service) => (
            <section key={service.id} className="bg-blue-900 p-4 rounded-lg shadow-md bg-opacity-90 text-center">
              <img src={service.imageUrl} alt={`${service.name}`} className="w-20 h-20 mx-auto mb-2" />
              <h2 className="text-lg font-semibold mb-2 text-white" style={{ fontFamily: "Georgia, serif" }}>
                {service.name}
              </h2>
              <p className="text-sm text-gray-300">{service.description}</p>
            </section>
          ))}
        </div>
      </div>
    </MainLayouts>
  );
}
