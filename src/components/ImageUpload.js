import React, { useState } from 'react';

const ImageUpload = () => {
  // State to store the selected image
  const [image, setImage] = useState(null);

  // Handler for file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage( reader.result); // Set the image to be displayed
      };
      reader.readAsDataURL(file); // Convert file to data URL
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      {/* Form with file input */}
      <form>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </form>

      {/* Display the selected image if there is one */}
      {image && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={image} alt="Uploaded" style={{ width: '300px', height: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
