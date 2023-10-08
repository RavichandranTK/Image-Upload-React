import React, { useEffect, useState } from "react";
import "./Application.css";
import { ImageUpload } from "./ImageUpload";
import { ImagesTable } from "./ImagesTable";
import { useLocation, useNavigate } from "react-router";

const ImageLanding = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showChooseFile, setShowChooseFile] = useState(false);
  const [existingImages, setExistingImages] = useState(
    JSON.parse(localStorage.getItem("uploadedImage")) || []
  );
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageName = file?.name?.split(".")[0] + "Image";
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage({
          id: Number(existingImages?.length + 1),
          image_name: imageName,
          imageSrc: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClear = () => {
    setSelectedImage(null);
    setShowChooseFile(false);
  };
  const saveImageToLocalstorage = () => {
    const updatedImages = [...existingImages, Object.assign({}, selectedImage)];
    updateNewImages(updatedImages);
    handleImageClear();
  };

  const updateNewImages = (updatedImgs) => {
    const uploadImgs = JSON.stringify(updatedImgs);
    localStorage.setItem("uploadedImage", uploadImgs);
    setExistingImages(updatedImgs);
  };

  const removeImage = (imgId) => {
    const newImages = existingImages?.filter((img) => img.id !== imgId);
    updateNewImages(newImages);
  };

  useEffect(() => {
    pathname !== "/" && navigate("/");
  }, [pathname, navigate]);

  return (
    <div className="image-index">
      <h1>Image Upload App</h1>
      <ImageUpload
        selectedImage={selectedImage}
        showChooseFile={showChooseFile}
        setShowChooseFile={setShowChooseFile}
        handleImageClear={handleImageClear}
        handleImageChange={handleImageChange}
        saveImageToLocalstorage={saveImageToLocalstorage}
      />
      <ImagesTable existingImages={existingImages} removeImage={removeImage} />
    </div>
  );
};

export default ImageLanding;
