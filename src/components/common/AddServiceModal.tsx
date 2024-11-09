import React, { useState } from "react";

interface AddServiceModalProps {
  closeModal: () => void;
  addService: (service: { name: string; description: string; image: string }) => void;
}

const AddServiceModal: React.FC<AddServiceModalProps> = ({ closeModal, addService }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description && image) {
      const serviceData = { name, description, image };
  
      try {
        const response = await fetch("http://localhost:3000/api/services", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(serviceData),
        });
  
        const result = await response.json();
  
        console.log('Backend response:', result);
  
        if (response.ok) {
          alert(result.message);  // Success alert
          addService(serviceData);
          closeModal();
        } else {
          setMessage(result.error || "Failed to add service");
        }
      } catch (error) {
        console.error("Error:", error);
        setMessage("Error occurred while adding the service");
      }
    } else {
      setMessage("Please fill all fields!");
    }
  };

  return (
    <div className="fixed inset-0 bg-blue-900 bg-opacity-75 flex justify-center items-center z-50" onClick={closeModal}>
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-semibold text-center mb-4">Add Service</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Service Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter service name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter service description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Upload Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:mr-4 file:rounded-full file:border-0 file:text-white file:bg-blue-600 hover:file:bg-blue-700"
            />
            {image && (
              <div className="mt-2 text-sm text-gray-600">
                <p>Selected File: {image}</p>
              </div>
            )}
          </div>
          {message && (
            <div className="text-red-600 mb-4">
              <p>{message}</p>
            </div>
          )}
          <div className="flex justify-between">
            <button type="button" onClick={closeModal} className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Save
            </button>
          </div>
        </form>
        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          &times;
        </button>
      </div>
    </div>
  );
};

export default AddServiceModal;
