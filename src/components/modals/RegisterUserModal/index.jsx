import React from "react";
export const RegisterUserModal = ({ closeModal, isOpen }) => (
  <div
    style={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      display: isOpen ? "flex" : "none",
    }}
    className="center"
    onClick={() => closeModal(false)}
  >
    <div
      style={{ width: 500, height: 500 }}
      className="bg-white"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button onClick={() => closeModal(false)}>close</button>
    </div>
  </div>
);
