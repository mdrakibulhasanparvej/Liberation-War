import React from "react";
import PhotoGallery from "../components/photographs/PhotoGallery";
import { photos as photosData } from "../data/photographs";

const Photographs = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Photographs</h2>
      <PhotoGallery photos={photosData} />
    </div>
  );
};

export default Photographs;
