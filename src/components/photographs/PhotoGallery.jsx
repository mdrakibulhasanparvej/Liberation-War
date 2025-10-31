import React, { useState } from "react";
import PhotoCard from "./PhotoCard";
import ZoomModal from "./ZoomModal";

const PhotoGallery = ({ photos }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} onClick={setSelected} />
        ))}
      </div>

      {selected && (
        <ZoomModal photo={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default PhotoGallery;
