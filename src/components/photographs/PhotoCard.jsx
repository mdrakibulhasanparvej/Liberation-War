import React from "react";
import Card from "../ui/Card";

const PhotoCard = ({ photo, onClick }) => {
  return (
    <Card className="cursor-pointer" onClick={() => onClick(photo)}>
      <figure>
        <img
          src={photo.url}
          alt={photo.title}
          className="rounded-lg w-full h-48 object-cover"
        />
      </figure>
      <h4 className="mt-2 font-semibold">{photo.title}</h4>
    </Card>
  );
};

export default PhotoCard;
