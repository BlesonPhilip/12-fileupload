import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2
import "./home.css";

const Home = () => {
  const [files, setFiles] = useState([]);

  // Fetch files from the server
  const getFiles = async () => {
    try {
      const response = await axios.get("http://localhost:3000/files");
      setFiles(response.data.files);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  useEffect(() => {
    getFiles(); // Fetch files on component mount
  }, []);

  // Delete file function
  const handleDelete = async (file) => {
    // Show confirmation modal
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/delete/${file.name}`);
          setFiles(files.filter((f) => f.name !== file.name)); // Remove from UI
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting file:", error);
          Swal.fire("Error!", "Failed to delete file.", "error");
        }
      }
    });
  };

  return (
    <>
      <div className="head">
        <h3>Uploaded Files</h3>
        <hr />
      </div>
      <br />

      <div className="product-container">
        {files.length === 0 ? (
          <p>No Files Uploaded Yet..</p>
        ) : (
          files.map((file) => (
            <div key={file.name} className="product-card">
              <img
                src={file.url}
                alt={file.name}
                className="product-image"
                onClick={() => handleDelete(file)} // Click to delete
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
