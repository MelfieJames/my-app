import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex justify-end items-center">
        <div className="text-sm border-r-2 border-white pr-4">
          <h2 className="text-xl font-semibold">Pel's Website</h2>
          <p>&copy; 2024 Pel's Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
