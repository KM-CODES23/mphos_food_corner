import axios from "axios";

const UPLOAD_URL = "http://localhost:7246/api/image/upload";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await axios.post(UPLOAD_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data.imageUrl;
  } catch (err) {
    console.error("Upload failed:", err.response || err);
    alert("Image upload failed.");
    return "";
  }
};
