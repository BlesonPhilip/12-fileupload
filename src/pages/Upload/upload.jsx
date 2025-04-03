import React from "react";
import "./upload.css";

const Upload = () => {
  return (
    <>
      <div className="form">
        <h1>Upload</h1>
        <form className="upload-form">
          <input type="file" name="file" id="file" />
          <button type="submit">Upload</button>
        </form>
      </div>
    </>
  );
};

export default Upload;
