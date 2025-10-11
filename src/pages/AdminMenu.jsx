// src/pages/AdminMenu.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";
import { useNavigate } from "react-router-dom";

// ✅ Base API URLs
const API_BASE = "https://localhost:7246/api/items";
const UPLOAD_URL = "https://localhost:7246/api/image/upload"; // updated to match ImageController

export default function AdminMenu() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    id: 0,
    name: "",
    price: "",
    category: "Meals",
    available: true,
    imageUrl: ""
  });
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // ✅ Auth guard for Admin
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (!user || user.role !== "Admin") navigate("/", { replace: true });
  }, [navigate]);

  // ✅ Fetch menu items
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_BASE);
      setItems(res.data);
    } catch (err) {
      console.error("Error fetching items:", err);
      setError("Failed to load items.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle input changes
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  // ✅ Upload image to backend
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(UPLOAD_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data.imageUrl;
    } catch (err) {
      console.error("Image upload failed:", err);
      alert("❌ Image upload failed. Check console.");
      return "";
    }
  };

  // ✅ Submit (Create or Edit)
  const submitForm = async (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.category) {
      setError("Please fill all required fields.");
      return;
    }

    const payload = {
      name: form.name,
      price: parseFloat(form.price),
      category: form.category,
      available: form.available,
      imageUrl: form.imageUrl,
    };

    try {
      setBusy(true);
      if (isEditing && form.id) {
        await axios.put(`${API_BASE}/${form.id}`, payload);
      } else {
        await axios.post(API_BASE, payload);
      }
      fetchItems();
      setForm({
        id: 0,
        name: "",
        price: "",
        category: "Meals",
        available: true,
        imageUrl: "",
      });
      setIsEditing(false);
      setError("");
    } catch (err) {
      console.error("Save failed:", err);
      setError("Failed to save item.");
    } finally {
      setBusy(false);
    }
  };

  // ✅ Edit and Delete actions
  const startEdit = (item) => {
    setForm(item);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteItem = async (id) => {
    if (!window.confirm("Delete this item?")) return;
    try {
      await axios.delete(`${API_BASE}/${id}`);
      fetchItems();
    } catch (err) {
      console.error("Delete failed:", err);
      alert("❌ Failed to delete item.");
    }
  };

  return (
    <div className="admin-items-wrapper">
      <h2 className="menu-title">Admin: Menu Management</h2>

      <form className="admin-item-form" onSubmit={submitForm}>
        <div className="form-row">
          <label>Name*</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="e.g. Cheese Burger"
            required
          />
        </div>

        <div className="form-row">
          <label>Price (R)*</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-row">
          <label>Category*</label>
          <select name="category" value={form.category} onChange={onChange}>
            <option>Meals</option>
            <option>Drinks</option>
            <option>Snacks</option>
          </select>
        </div>

        <div className="form-row checkbox">
          <label>
            <input
              type="checkbox"
              name="available"
              checked={form.available}
              onChange={onChange}
            />
            Available
          </label>
        </div>

        {/* ✅ Image Upload */}
        <div className="form-row">
          <label>Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files[0];
              if (file) {
                const imageUrl = await uploadImage(file);
                if (imageUrl) setForm((f) => ({ ...f, imageUrl }));
              }
            }}
          />
          {form.imageUrl && (
            <img
              src={form.imageUrl}
              alt="preview"
              className="preview-img"
              style={{
                width: "120px",
                height: "90px",
                marginTop: "8px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                objectFit: "cover",
              }}
            />
          )}
        </div>

        {error && <p className="error-text">{error}</p>}

        <button className="btn-primary" type="submit" disabled={busy}>
          {busy ? "Saving..." : isEditing ? "Save Changes" : "Add Item"}
        </button>
      </form>

      {/* ✅ Display Menu Items */}
      <div className="admin-items-grid">
        {loading ? (
          <p>Loading...</p>
        ) : items.length === 0 ? (
          <p>No items available.</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="admin-item-card">
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="menu-card-img"
                />
              ) : (
                <div className="img-placeholder">No Image</div>
              )}
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>R{item.price}</p>
                <p className="category">{item.category}</p>
                <p className={item.available ? "in-stock" : "out-stock"}>
                  {item.available ? "In Stock" : "Out of Stock"}
                </p>
                <div className="card-actions">
                  <button className="btn-edit" onClick={() => startEdit(item)}>
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
