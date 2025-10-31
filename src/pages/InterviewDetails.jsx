import React from "react";
import { useParams } from "react-router-dom";
import { interviews as interviewsData } from "../data/interviews";
import AudioPlayer from "../components/interviews/AudioPlayer";

const InterviewDetails = () => {
  const { id } = useParams();
  const interview = interviewsData.find((i) => i.id === parseInt(id));

  if (!interview) return <p>Interview not found!</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{interview.name}</h2>
      <p className="mb-2">
        <strong>Role:</strong> {interview.role}
      </p>
      <p className="mb-2">
        <strong>Bio:</strong> {interview.bio}
      </p>
      <p className="mb-4">
        <strong>Summary:</strong> {interview.summary}
      </p>
      <AudioPlayer src={interview.audio} />
    </div>
  );
};

export default InterviewDetails;
