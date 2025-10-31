import React from "react";

const Input = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <div className="form-control mb-4">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input input-bordered w-full"
      />
    </div>
  );
};

export default Input;
