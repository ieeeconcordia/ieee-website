import { useState } from "react";

export default function Upload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (event: any) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!selectedImage || !selectedFile) {
      return;
    }

    try {
      const imageData = new FormData();
      const mdData = new FormData();
      imageData.append("image", selectedImage);
      mdData.append("file", selectedFile);

      const responseImg = await fetch("/api/uploads/image", {
        method: "POST",
        body: imageData,
      });

      const responseMd = await fetch("/api/uploads/markdown", {
        method: "POST",
        body: mdData,
      });

      const { markdownPath, mdFilePath } = await responseMd.json();
      const { imagePath, imageFilePath } = await responseImg.json();

      // Do something with the image and file paths, e.g., store them in state or database
      console.log(markdownPath, mdFilePath);
      console.log(imagePath, imageFilePath);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <div>
        <label htmlFor="file">File:</label>
        <input type="file" id="file" onChange={handleFileChange} />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
}
