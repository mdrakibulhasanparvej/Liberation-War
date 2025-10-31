import React from "react";
import { Link } from "react-router-dom";
import Card from "../ui/Card";

const InterviewCard = ({ interview }) => {
  return (
    <Card className="hover:shadow-lg cursor-pointer">
      <h3 className="font-bold text-lg">{interview.name}</h3>
      <p className="text-gray-500">{interview.role}</p>
      <Link
        to={`/interviews/${interview.id}`}
        className="text-primary mt-2 block hover:underline"
      >
        View Interview
      </Link>
    </Card>
  );
};

export default InterviewCard;
