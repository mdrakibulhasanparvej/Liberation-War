import React from "react";

const FileUpload = ({ onChange }) => {
  return (
    <div className="form-control mb-4">
      <input
        type="file"
        onChange={onChange}
        className="file-input file-input-bordered w-full"
      />
    </div>
  );
};

export default FileUpload;
