import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { stateToHTML } from "draft-js-export-html";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { firestore, storage } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, uploadString } from "firebase/storage";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

export default function MyEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlContent, setHtmlContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageURL, setSelectedImageURL] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventPrice, setEventPrice] = useState("");
  const [eventOrganizer, setEventOrganizer] = useState("");
  const [eventSponsors, setEventSponsors] = useState("");

  // upload image to cloudinary and return the link
  const uploadImageCallBack = async (file: any) => {
    console.log("Call function");
    try {
      const url = "https://api.cloudinary.com/v1_1/ddds30vut/upload";
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "cdevi0uq");
      const response = await axios.post(url, formData);
      console.log("Image uploaded");
      return response.data.url;
    } catch (error) {
      throw error;
    }
  };

  const saveBlogPost = () => {
    const content = editorState.getCurrentContent();
    const rawContent = convertToRaw(content);
    console.log(rawContent);
  };

  const submitPost = () => {
    const content = editorState.getCurrentContent();
    const contentJSON = JSON.stringify(convertToRaw(content));
    const rawContent = convertToRaw(content);
    console.log(rawContent);

    const storageRef = ref(storage, eventTitle);

    // 'file' comes from the Blob or File API
    uploadString(storageRef, contentJSON).then((snapshot) => {
      console.log("Uploaded a raw string!");
    });
  };

  const onChange = (editorState: any) => {
    setEditorState(editorState);
    let htmlContent = stateToHTML(editorState.getCurrentContent());
    setHtmlContent(htmlContent);
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    console.log(file);
    setSelectedImage(file);
    setSelectedImageURL(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (selectedImage && htmlContent) {
      // upload image to cloudinary
      const imageURL = await uploadImageCallBack(selectedImage);
      // upload all the data as a firestore document
      const docRef = await addDoc(collection(firestore, eventType), {
        title: eventTitle,
        date: eventDate,
        location: eventLocation,
        time: eventTime,
        description: eventDescription,
        price: eventPrice,
        organizer: eventOrganizer,
        sponsors: eventSponsors,
        image: imageURL,
        eventHTML: htmlContent,
      });
      console.log("Document written with ID: ", docRef.id);
    }
  };

  return (
    <div className="blogPostEditor">
      <Head>
        <title>Editor</title>
      </Head>
      <div className="m-16 border-2 flex flex-col p-4 gap-2">
        <h2>Metadata</h2>
        <p>
          <i>* - required</i>
        </p>
        <label>Event Title*</label>
        <input
          type="text"
          className="border"
          onChange={(e) => setEventTitle(e.target.value)}
          required
        />
        <label>Date*</label>
        <input
          type="text"
          className="border"
          onChange={(e) => setEventDate(e.target.value)}
          required
        />
        <label>Location*</label>
        <input
          type="text"
          className="border"
          onChange={(e) => setEventLocation(e.target.value)}
          required
        />
        <label>Type*</label>
        <input
          type="text"
          className="border"
          onChange={(e) => setEventType(e.target.value)}
          required
        />
        <label>Time*</label>
        <input
          type="text"
          className="border"
          onChange={(e) => setEventTime(e.target.value)}
          required
        />
        <label>Description* (Summary of the event in 1-2 lines.)</label>
        <input
          type="text"
          className="border"
          onChange={(e) => setEventDescription(e.target.value)}
          required
        />
        <label>Price*</label>
        <input
          type="text"
          className="border"
          onChange={(e) => setEventPrice(e.target.value)}
          required
        />
        <label>Organizer*</label>
        <input
          type="text"
          className="border"
          onChange={(e) => setEventOrganizer(e.target.value)}
          required
        />
        <label>Sponsors</label>
        <input
          type="text"
          className="border"
          onChange={(e) => setEventSponsors(e.target.value)}
        />
        <label>Image*</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <label>Event Details Text*</label>
        <div className="border">
          <Editor
            editorState={editorState}
            onEditorStateChange={onChange}
            toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
            }}
          />
        </div>
      </div>

      <button onClick={submitPost}>Submit</button>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h2>
        <Link href="/editor/list">See list</Link>
      </h2>
      <div className="m-16 border-2 ">
        <img src={selectedImageURL} alt="Event Image" className="w-1/2" />
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
}
