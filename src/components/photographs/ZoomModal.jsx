import React from "react";

const ZoomModal = ({ photo, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative bg-base-100 p-4 rounded max-w-3xl w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 btn btn-sm btn-circle"
        >
          ×
        </button>
        <img
          src={photo.url}
          alt={photo.title}
          className="w-full h-auto rounded"
        />
        <h3 className="mt-2 font-semibold">{photo.title}</h3>
      </div>
    </div>
  );
};

export default ZoomModal;
