import React, { useState } from "react";
import DocumentCard from "../components/documents/DocumentCard";
import DocumentFilter from "../components/documents/DocumentFilter";
import { documents as docsData } from "../data/documents";

const Documents = () => {
  const [filters, setFilters] = useState({ type: "", date: "" });

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const filteredDocs = docsData.filter(doc => {
    return (!filters.type || doc.type === filters.type) &&
           (!filters.date || doc.date === filters.date);
  });

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Documents</h2>
      <DocumentFilter filters={filters} onChange={handleFilterChange} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredDocs.map(doc => <DocumentCard key={doc.id} doc={doc} />)}
      </div>
    </div>
  );
};

export default Documents;
