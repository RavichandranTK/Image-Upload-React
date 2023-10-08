import "./Application.css";

export const ImageUpload = ({
  selectedImage,
  showChooseFile,
  setShowChooseFile,
  handleImageClear,
  handleImageChange,
  saveImageToLocalstorage,
}) => {
  return (
    <div className="image-upload-context">
      <button
        className="btn btn-primary add-btn"
        onClick={() => setShowChooseFile(true)}
        style={{ display: !showChooseFile ? "block" : "none" }}
      >
        Add Image
      </button>
      <div style={{ display: showChooseFile ? "block" : "none" }}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {selectedImage && (
          <div className="image-preview">
            <img src={selectedImage?.imageSrc} alt="Selected" />
            <div className="action-btns">
              <button className="btn btn-danger" onClick={handleImageClear}>
                Cancel
              </button>
              <button
                className="btn btn-success"
                onClick={saveImageToLocalstorage}
              >
                Add Image
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
