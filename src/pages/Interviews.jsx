import React from "react";
import InterviewCard from "../components/interviews/InterviewCard";
import { interviews as interviewsData } from "../data/interviews";

const Interviews = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Interviews</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {interviewsData.map((i) => (
          <InterviewCard key={i.id} interview={i} />
        ))}
      </div>
    </div>
  );
};

export default Interviews;
