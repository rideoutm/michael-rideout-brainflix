import "./upload.scss";
import { Link, useNavigate } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import bikeImage from "../../Assets/Images/Upload-video-preview.jpg";
import UploadComplete from "../../components/UploadComp/UploadComplete";
import axios from "axios";

function Upload() {
  let navigate = useNavigate();
  const btnClick = (e) => {
    e.preventDefault();
    const title = e.target.titlebox.value;
    const textarea = e.target.textarea.value;

    let newVideo = {
      title: title,
      description: textarea,
    };

    axios.post("http://localhost:8080/", newVideo).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        navigate("/UploadComp", { replace: true });
      }
    });
  };

  return (
    <form onSubmit={btnClick} className="Upload__container">
      <hr className="Upload__divider" />
      <div className="Upload__header">Upload Video</div>
      <hr className="Upload__divider-top" />
      <div className="Upload__desktop-Container">
        <div className="Upload__img-container">
          <label className="Upload__thumbnail-label" htmlFor="video-thumbnail">
            VIDEO THUMBNAIL
          </label>

          <img className="Upload__img" src={bikeImage} alt="upload thumbnail" />
        </div>
        <div className="Upload__inputs">
          <label className="Upload__title-label" htmlFor="title-label">
            TITLE YOUR VIDEO
          </label>
          <input
            id="title-label"
            className="Upload__video-title"
            type="text"
            placeholder="Add a title to your video"
            name="titlebox"
          />
          <label
            className="Upload__description-label"
            htmlFor="video-description"
          >
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            id="video-description"
            className="Upload__video-description"
            type="text"
            placeholder="Add a description to your video"
            name="textarea"
          />
        </div>
      </div>
      <hr className="Upload__divider-bottom" />
      <div className="Upload__btn-container">
        <div className="Upload__publish-container">
          {/* <Link to="/UploadComp" element={UploadComplete}> */}
          <button className="Upload__publish">PUBLISH</button>
          {/* </Link> */}
        </div>

        <div className="Upload__cancel-container">
          <Link to="/" element={HomePage}>
            <button className="Upload__cancel">CANCEL</button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Upload;
