import { useState } from "react";
import { storage } from "../private/firebase";
import {
  StorageReference,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

export default function FirebaseUpload() {
  const [imageFile, setImageFile] = useState(null);
  const [eventName, setEventName] = useState("");
  const [markdownFile, setMarkdownFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleImageFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImageFile(selectedFile);
  };

  const handleMarkdownFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setMarkdownFile(selectedFile);
  };

  const handleEventNameChange = (e) => {
    const evtName = e.target.value;
    console.log(evtName);
    setEventName(evtName);
  };

  //   const handleFileChange = (e) => {
  //     const selectedFile = e.target.files[0];
  //     console.log(selectedFile);
  //     setFile(selectedFile);
  //     setFileName(selectedFile.name);
  //   };

  const fileUpload = (
    storageRef: StorageReference,
    file: Blob | Uint8Array | ArrayBuffer,
    type: string
  ) => {
    const metaData: any = { name: type };
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get the upload progress as a percentage
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error("Upload error:", error);
      },
      () => {
        // Upload completed successfully
        console.log("File uploaded successfully!");
      }
    );
  };

  const handleUpload = () => {
    if (imageFile && markdownFile) {

      // Uploading the files to firebase storage
      const storageImgRef = ref(storage, `${eventName}/img`);
      const storageMdRef = ref(storage, `${eventName}/markdown`);
      fileUpload(storageImgRef, imageFile, "img");
      fileUpload(storageMdRef, markdownFile, "markdown");

      // Clearing the inputs
      setImageFile(null)
      setMarkdownFile(null)
      setEventName("")
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <div>
        <label className="block mb-2 font-bold text-gray-700">
          Upload Image File:
        </label>
        <input
          type="file"
          className="border rounded p-2 mb-2"
          onChange={handleImageFileChange}
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2 font-bold text-gray-700">
          Upload Markdown File:
        </label>
        <input
          type="file"
          className="border rounded p-2 mb-2"
          onChange={handleMarkdownFileChange}
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2 font-bold text-gray-700">Event Name</label>
        <input
          type="text"
          className="border rounded p-2 mb-2"
          onChange={(e) => {handleEventNameChange(e); e.target.value = ""}}
          required
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleUpload}
      >
        Upload Files
      </button>
      {uploadProgress > 0 && (
        <div className="mt-4">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-200 text-blue-600">
                  {Math.round(uploadProgress)}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
              <div
                style={{ width: `${uploadProgress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
