
import React, { useState } from 'react';
import { Footer } from "../components/Footer/Footer";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

    return (
    <>
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 mt-6 text-purple-500">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center">
          <label htmlFor="name" className="block mr-2 px-3">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-4"/>
        </div>
        <div className="flex items-center">
          <label htmlFor="email" className="block mr-2 px-3">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-4"/>
        </div>
        <div className="flex items-center">
          <label htmlFor="message" className="block mr-2">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-4" />
        </div>
        <button type="submit" className="bg-purple-500 text-white hover:bg-white hover:text-purple-600 border-purple-300 py-4 px-8 rounded-md transition-transform transform hover:scale-110">Send</button>
      </form>
    </div>
    <Footer />
    </>
  );
};


