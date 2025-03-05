import React, { useState } from "react";
import "@tailwindcss/typography";
import { uploadImage } from "../../utils/uploadImage";
import axios from "axios";
import { useEffect } from "react";
import { api_source_current } from "../../config";

const PostHackathon = () => {
  const [formData, setFormData] = useState({
    hackathon_name: "",
    description: "",
    location: "",
    banner_image: "",
    logo_image: "",
    organizer: "",
    sponsors: "",
    start_date: "",
    end_date: "",
    participation_criteria: "",
    schedule: "",
    hackathon_rules: "",
    prize_details: "",
    contact_email: "",
    contact_phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    
    if (files.length === 0) return;
  
    try {
      const imageUrl = await uploadImage(files[0]);
      setFormData((prev) => ({ ...prev, [name]: imageUrl }));
    } catch (error) {
      console.error("Image upload failed:", error);
      alert("Image upload failed. Please try again.");
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${api_source_current}/hackathon`, formData);
      alert(response.data.message);
    } catch (error) {
      console.error("Error posting hackathon:", error);
      alert("Failed to post hackathon.");
    }
  };
  

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-900 to-black mt-12 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-blue-500 to-white opacity-20 rounded-full animate-pulse blur-3xl -top-10 left-10"></div>
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-blue-800 to-white opacity-20 rounded-full animate-pulse blur-3xl -bottom-10 right-10"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full  p-10 bg-black bg-opacity-70 rounded-2xl shadow-2xl text-white prose prose-invert">
        <h2 className="text-4xl font-extrabold text-center mb-8">Create Your Hackathon</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dynamic Inputs */}
          {[
            { label: "Hackathon Name", name: "hackathon_name", type: "text" },
            { label: "Location", name: "location", type: "text" },
            { label: "Description", name: "description", type: "textarea" }, 
            { label: "Banner Image", name: "banner_image", type: "file" },
            { label: "Logo Image", name: "logo_image", type: "file" },
            { label: "Organizer", name: "organizer", type: "text" },
            { label: "Sponsors", name: "sponsors", type: "text" },
            { label: "Start Date", name: "start_date", type: "date" } ,
            { label: "End Date", name: "end_date", type: "date" },
            { label: "Participation Criteria", name: "participation_criteria", type: "textarea" },
            { label: "Schedule", name: "schedule", type: "textarea" },
            { label: "Hackathon Rules ", name: "hackathon_rules", type: "textarea" },
            { label: "Prize Details", name: "prize_details", type: "textarea" },
            { label: "Contact Email", name: "contact_email", type: "email" },
            { label: "Contact Phone", name: "contact_phone", type: "tel" },
          ].map((field, index) => (
            <div key={index} className={`flex flex-col space-y-2 ${field.type === "textarea" || field.type === "file" ? "md:col-span-2" : ""}`}>
              <label htmlFor={field.name} className="text-sm font-semibold">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0f172a] rounded-lg border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows="4"
                />
              ) : field.type === "radio" ? (
                <div className="flex items-center space-x-6">
                  {[
                    { label: "Online", value: "online" },
                    { label: "Offline", value: "offline" },
                  ].map((mode) => (
                    <label key={mode.value} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="mode"
                        value={mode.value}
                        checked={formData.mode === mode.value}
                        onChange={handleChange}
                        className="form-radio text-blue-600 focus:ring-blue-400"
                      />
                      <span className="ml-2 capitalize">{mode.label}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  onChange={field.type === "file" ? handleFileChange : handleChange}
                  className="w-full px-4 py-3 bg-[#0f172a] rounded-lg border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              )}
            </div>
          ))}

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              
              className="px-10 py-3 font-medium border border-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 text-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              Post Hackathon
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostHackathon;
