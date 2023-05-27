import React, { useState } from "react";
import axios from "axios";

function UploadImage() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleChange = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("testImage", file);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth//upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      console.log("LOL saved image");
      // if successful, can display a message or redirect to another page
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Upload your profile picture</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}

export default UploadImage;
