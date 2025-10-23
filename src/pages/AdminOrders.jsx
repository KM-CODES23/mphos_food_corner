import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    if (!user || user.role !== "Admin") {
      // not authorized - redirect or show message
      setLoading(false);
      return;
    }
    axios.get("https://localhost:7246/api/order")
      .then(res => setOrders(res.data))
      .catch(err => console.error(err))
      .finally(()=> setLoading(false));
  }, [user]);

  const updateStatus = async (orderId, status) => {
    try {
      await axios.put(`https://localhost:7246/api/order/${orderId}/status`, status, {
        headers: { "Content-Type": "application/json" }
      });
      setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));
    } catch (err) {
      console.error(err);
      alert("Failed to update status.");
    }
  };

  if (loading) return <div>Loading orders...</div>;
  if (!user || user.role !== "Admin") return <div>Not authorized.</div>;

  return (
    <div className="admin-orders-wrapper">
      <h2>All Orders (Admin)</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="order-card admin">
            <div className="order-header">
              <div>
                <h3>Order #{order.id}</h3>
                <p><strong>User:</strong> {order.userEmail}</p>
                <p><strong>Placed:</strong> {new Date(order.date).toLocaleString()}</p>
              </div>
              <div>
                <p><strong>Total:</strong> R{order.total.toFixed(2)}</p>
                <select
  value={order.status}
  onChange={async (e) => {
    try {
      await axios.put(
        `http://localhost:7246/api/order/${order.id}/status`,
        JSON.stringify(e.target.value),
        { headers: { "Content-Type": "application/json" } }
      );
      setOrders((prev) =>
        prev.map((o) =>
          o.id === order.id ? { ...o, status: e.target.value } : o
        )
      );
    } catch {
      alert("Failed to update status");
    }
  }}
>
  <option>Pending</option>
  <option>Ready for Collection</option>
  <option>Collected</option>
</select>

                <div style={{marginTop:8}}>
                  {order.status !== "Ready for Collection" && (
                    <button onClick={() => updateStatus(order.id, "Ready for Collection")}>Mark Ready</button>
                  )}
                  {order.status !== "Collected" && (
                    <button style={{marginLeft:8}} onClick={() => updateStatus(order.id, "Collected")}>Mark Collected</button>
                  )}
                </div>
              </div>
            </div>

            <ul className="order-items">
              {order.items.map((it, idx) => (
                <li key={idx}>
                  {it.itemName} x {it.quantity} — R{(it.unitPrice * it.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminOrders;
