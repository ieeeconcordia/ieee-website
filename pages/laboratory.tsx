// components/ImageUploader.js
import React, { useState } from "react";
import cloudinary from "@/lib/cloudinary";

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleImageUpload = async (event: any) => {
    console.log("Clicked");

    const file = event.target.files[0];
    console.log(file);

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "klyl1arw");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/ddds30vut/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setImage(data.secure_url);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" />}
      <button onClick={handleImageUpload}> Submit </button>
    </div>
  );
}

export default ImageUploader;
