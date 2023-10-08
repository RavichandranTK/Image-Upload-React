import { useNavigate } from "react-router";
import "./Application.css";

export const ImagesTable = ({ existingImages, removeImage }) => {
  const navigate = useNavigate();
  return (
    <div className="image-table">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Image name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {existingImages.length > 0 ? (
            existingImages?.map((image, ind) => {
              return (
                <tr>
                  <td class="action-btn"> {ind + 1} </td>
                  <td>{image?.image_name}</td>
                  <td className="action-btn-container">
                    <button class="btn btn-info action-btn" onClick={() => navigate(`image/${image?.id}`)}>View</button>
                    <button
                      class="btn btn-danger action-btn"
                      onClick={() => removeImage(image?.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colspan="4" class="no-data-found">
                Images not found !
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
