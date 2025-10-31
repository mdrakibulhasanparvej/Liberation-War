import React from "react";
import { useParams } from "react-router-dom";
import { documents as docsData } from "../data/documents";
import Button from "../components/ui/Button";

const DocumentDetails = () => {
  const { id } = useParams();
  const doc = docsData.find((d) => d.id === parseInt(id));

  if (!doc) return <p>Document not found!</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{doc.title}</h2>
      <p className="mb-2">
        <strong>Type:</strong> {doc.type}
      </p>
      <p className="mb-2">
        <strong>Date:</strong> {doc.date}
      </p>
      <p className="mb-2">
        <strong>Source:</strong> {doc.source}
      </p>
      <p className="mb-4">{doc.description}</p>
      <Button onClick={() => window.open(doc.file, "_blank")}>
        Download Document
      </Button>
    </div>
  );
};

export default DocumentDetails;
