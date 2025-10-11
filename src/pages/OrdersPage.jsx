import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      axios
        .get(`https://localhost:7246/api/order/user/${user.email}`)
        .then((res) => setOrders(res.data))
        .catch((err) => console.error("Error fetching orders:", err));
    }
  }, [user]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "status-pending";
      case "ready for collection":
        return "status-ready";
      case "collected":
        return "status-collected";
      default:
        return "status-pending";
    }
  };

  return (
    <div className="orders-container">
      <h2 className="orders-title">My Orders</h2>

      {orders.length === 0 ? (
        <p className="no-orders">You haven’t placed any orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <h3>Order #{order.id}</h3>
                <span className={`order-status ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>

              <div className="order-body">
                <ul className="order-items">
                  {order.items.map((item, i) => (
                    <li key={i}>
                      <span>{item.itemName}</span>
                      <span>x{item.quantity}</span>
                    </li>
                  ))}
                </ul>

                <div className="order-total">
                  <strong>Total:</strong> R{order.total.toFixed(2)}
                </div>
              </div>

              <div className="order-footer">
                <p className="order-date">
                  📅 Placed on: {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
