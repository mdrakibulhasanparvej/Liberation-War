import React from "react";

const DocumentFilter = ({ filters, onChange }) => {
  return (
    <div className="flex gap-4 mb-4">
      <select
        value={filters.type}
        onChange={(e) => onChange("type", e.target.value)}
        className="select select-bordered"
      >
        <option value="">All Types</option>
        <option value="Treaty">Treaty</option>
        <option value="Declaration">Declaration</option>
      </select>
      <input
        type="date"
        value={filters.date}
        onChange={(e) => onChange("date", e.target.value)}
        className="input input-bordered"
      />
    </div>
  );
};

export default DocumentFilter;
