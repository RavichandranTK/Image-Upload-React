import { useNavigate, useParams } from "react-router";
import "./Application.css";

const ImageView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const existingImages =
    JSON.parse(localStorage.getItem("uploadedImage")) || [];
  const image = existingImages?.find((img) => img?.id === Number(id));
  return (
    <div className="image-views">
      <div className="img-view-title">
        <h3>{image?.image_name}</h3>
        <button className="btn btn-info" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
      <img src={image?.imageSrc} alt="Selected" />
    </div>
  );
};

export default ImageView;
