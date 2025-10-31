import React from "react";
import { Link } from "react-router-dom";
import Card from "../ui/Card";

const DocumentCard = ({ doc }) => {
  return (
    <Card className="hover:shadow-lg cursor-pointer">
      <h3 className="font-bold text-lg">{doc.title}</h3>
      <p className="text-gray-500">
        {doc.type} | {doc.date}
      </p>
      <Link
        to={`/documents/${doc.id}`}
        className="text-primary mt-2 block hover:underline"
      >
        View Details
      </Link>
    </Card>
  );
};

export default DocumentCard;
