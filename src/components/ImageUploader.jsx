// src/components/ImageUploader.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const UPLOAD_URL = "http://localhost:7246/api/image/upload";

const ImageUploader = ({ onUpload, existingUrl }) => {
  const [previewUrl, setPreviewUrl] = useState(existingUrl || "");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setPreviewUrl(existingUrl || "");
  }, [existingUrl]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Show temporary preview immediately
    setPreviewUrl(URL.createObjectURL(file));

    // Start upload
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(UPLOAD_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      const uploadedUrl = res.data.imageUrl;
      setPreviewUrl(uploadedUrl);

      if (onUpload) onUpload(uploadedUrl); // send URL to parent
    } catch (err) {
      console.error("Image upload failed:", err.response || err);
      alert("Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="image-uploader">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {previewUrl && (
        <div style={{ marginTop: 10 }}>
          <img
            src={previewUrl}
            alt="Preview"
            width={200}
            onError={(e) => (e.target.src = "/placeholder.jpg")}
          />
        </div>
      )}
      {uploading && <p style={{ color: "#555" }}>Uploading...</p>}
    </div>
  );
};

export default ImageUploader;
