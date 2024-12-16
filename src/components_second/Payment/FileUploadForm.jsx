import React, { useState } from "react";
import axios from "axios";

const FileUploadForm = () => {
  const [photo, setPhoto] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!photo) {
      alert("Please select an image to upload.");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("photo", photo);

    try {
      const response = await axios.post("v1/student/uploadPicture", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.status === "image Uploaded") {
        setSuccessMessage("Image uploaded successfully!");
      }

      setPhoto(null);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload the image. Please try again.");
    } finally {
      setUploading(false);
    }
  };


  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </div>

        {/* Upload button */}
        <button
          type="submit"
          className="bg-teal-500 text-white px-4 py-2 rounded"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>

    
      {successMessage && (
        <div className="text-green-500 mt-4">{successMessage}</div>
      )}
    </div>
  );
};

export default FileUploadForm;
