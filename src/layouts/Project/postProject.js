import React, { useState } from "react";
import "@tailwindcss/typography";
import { uploadImage } from "../../utils/uploadImage";
import axios from "axios";
import { api_source_current } from "../../config";


const PostProject = () => {
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    description: "",
    location: "",
    banner_image: "",
    logo_image: "",
    project_organized_by: "",
    sponsors: "",
    date: "",
    end_date: "",
    tech_stack_required: "",
    schedule: "",
    requirements: "",
    rewards: "",
    contact_email: "",
    contact_phone: ""
  }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails({ ...projectDetails, [name]: value });
  };

  const handleFileChange = async (e) => {
      const { name, files } = e.target;
      
      if (files.length === 0) return;
    
      try {
        const imageUrl = await uploadImage(files[0]);
        setProjectDetails((prev) => ({ ...prev, [name]: imageUrl }));
      } catch (error) {
        console.error("Image upload failed:", error);
        alert("Image upload failed. Please try again.");
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const response = await axios.post(`${api_source_current}/projects`, projectDetails);
        alert(response.data.message);
      } catch (error) {
        console.error("Error posting project:", error);
        alert("Failed to post project.");
      }
    };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-900 to-black mt-12 overflow-hidden">
      <div className="relative z-10 w-full p-10 bg-black bg-opacity-70 rounded-2xl shadow-2xl text-white prose prose-invert">
        <h2 className="text-4xl font-extrabold text-center mb-8">Create Your Project</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[  
            { label: "Project Name", name: "title", type: "text" },
            { label: "Location", name: "location", type: "text" },
            { label: "Description", name: "description", type: "textarea" }, 
            { label: "Banner Image", name: "banner_image", type: "file" },
            { label: "Logo Image", name: "logo_image", type: "file" },
            { label: "Organizer", name: "project_organized_by", type: "text" },
            { label: "Start Date", name: "date", type: "date" },
            { label: "End Date", name: "end_date", type: "date" },
            { label: "Tech Stack Used", name: "tech_stack_required", type: "textarea" },
            { label: "Schedule", name: "schedule", type: "textarea" },
            { label: "Skills Required", name: "requirements", type: "textarea" },
            { label: "Rewards/Benefits", name: "rewards", type: "textarea" },
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
                  value={projectDetails[field.name]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0f172a] rounded-lg border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows="4"
                />
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
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              
              className="px-10 py-3 font-medium border border-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 text-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              Post Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostProject;
