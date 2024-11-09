import React from "react";
import MainLayouts from "@/components/layouts/MainLayouts";

const page: React.FC = () => {
  return (
    <MainLayouts>
      <div
        className="py-12 px-6 overflow-y-auto"
        style={{
          maxWidth: "100vw",
          maxHeight: "79vh", // Set the maximum height
          margin: "0 auto",
          backgroundImage: `url('https://64.media.tumblr.com/6c528dab5498d431a101acd4398160b4/tumblr_o7vrxl8Uk11runoqyo10_540.gif')`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-4xl font-bold mb-6 text-white">About PelTech</h1>
        <div>
          <p className="text-lg mb-4 text-white">
            Welcome to <strong>PelTech</strong>! We understand how crucial your devices are to your everyday life. Whether it’s your smartphone, laptop, printer, washing machine, or air conditioner, our team is dedicated to providing you with the highest quality repair services. Our mission is to ensure that your technology runs smoothly, allowing you to focus on what matters most to you.
          </p>
          <h2 className="text-3xl font-semibold mt-6 mb-2 text-white">Who We Are</h2>
          <p className="text-lg mb-4 text-white">
            PelTech is a passionate team of skilled technicians with years of experience in hardware repair. We take pride in our ability to diagnose and fix a wide range of hardware issues, ensuring that your devices are back in working order as quickly as possible. Our commitment to quality and customer satisfaction sets us apart from the rest.
          </p>
          <h2 className="text-3xl font-semibold mt-6 mb-2 text-white">Our Services</h2>
          <ul className="list-disc list-inside text-lg mb-4 text-white">
            <li>Smartphone Repairs: From cracked screens to battery replacements, we handle all types of smartphone issues with precision and care.</li>
            <li>Laptop Repairs: Whether your laptop is running slow, has a broken keyboard, or needs a hardware upgrade, we’ve got you covered.</li>
            <li>Printer Services: We specialize in fixing both inkjet and laser printers, ensuring your printing needs are always met.</li>
            <li>Home Appliances: Our expertise extends to repairing washing machines and air conditioners, keeping your home comfortable and functional.</li>
            <li>WiFi Vendors: Having connectivity issues? We provide troubleshooting and repairs for all types of WiFi equipment, ensuring you stay connected.</li>
          </ul>
          <h2 className="text-3xl font-semibold mt-6 mb-2 text-white">Why Choose Us?</h2>
          <p className="text-lg mb-4 text-white">
            Our team consists of highly trained professionals who are passionate about technology and repair. We use only the highest quality parts for repairs, ensuring durability and performance. Your satisfaction is our priority; we take the time to listen to your concerns and provide tailored solutions that meet your needs.
          </p>
          <h2 className="text-3xl font-semibold mt-6 mb-2 text-white">Get in Touch</h2>
          <p className="text-lg mb-4 text-white">
            If you have any questions or need assistance with your devices, don’t hesitate to contact us. At PelTech, we are here to help you every step of the way!
          </p>
        </div>
      </div>
    </MainLayouts>
  );
};

export default page;
