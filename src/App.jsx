import { useState } from "react";
const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET_KEY;
const cloudName = import.meta.env.VITE_CLOUD_NAME;

const App = () => {
  const [profileImage, setProfileImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    setProfileImage(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };

  const uploadImage = async (e) => {
    e.preventDefault();

    try {
      if (!profileImage) {
        setLoading(false);
        alert("No Image Selected");
        return;
      }
      if (
        profileImage &&
        (profileImage.type === "image/png" ||
          profileImage.type === "image/jpg" ||
          profileImage.type === "image/jpeg")
      ) {
        setLoading(true);
        const image = new FormData();

        image.append("file", profileImage);
        image.append("cloud_name", cloudName);
        image.append("upload_preset", uploadPreset);

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          { method: "POST", body: image }
        );

        const data = await response.json();
        console.log(data.url);
        const imgUrl = data.url.toString();

        setPreviewImage(null);
        alert(imgUrl);
      } else {
        alert("No Image Selected");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <form onSubmit={uploadImage}>
        <label htmlFor="image">
          Upload Image:
          <br />
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg"
            name="image"
            id="image"
            onChange={handleImageChange}
          />
        </label>
        <p>{loading ? "Uploading" : <button>Upload Image</button>}</p>
      </form>
      <div>
        {previewImage && (
          <img
            width="200"
            height="200"
            src={previewImage && previewImage}
            alt="image preview"
          />
        )}
      </div>
    </div>
  );
};

export default App;
