import Example from "@/components/Example";
import Loading from "@/components/animations/Loading";
import Navbar from "@/components/navbar";
import { useState } from 'react';

export default function Laboratory() {
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
    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('file', selectedFile);

    const response = await fetch('/api/uploads/mdImg', {
      method: 'POST',
      body: formData,
    });

    const { imagePath, filePath } = await response.json();

    // Do something with the image and file paths, e.g., store them in state or database
    console.log(imagePath, filePath);
  } catch (error) {
    console.error(error);
  }
};

return (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="image">Image:</label>
      <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
    </div>
    <div>
      <label htmlFor="file">File:</label>
      <input type="file" id="file" onChange={handleFileChange} />
    </div>
    <button type="submit">Upload</button>
  </form>
);

}
