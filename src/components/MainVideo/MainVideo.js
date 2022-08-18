import video from "../../Data/videos.json";
import videoDetails from "../../Data/video-details.json";
import viewIcon from "../../Assets/Icons/views.svg";
import heartIcon from "../../Assets/Icons/likes.svg";

function MainVideo() {
  return (
    <>
      <div className="main-video">
        <video
          className="main-video__video-control"
          poster={video[0].image}
          type="video/mp4"
          src="#"
          alt={video[0].title}
          controls
        />
      </div>
      <div className="video-details">
        <h2 className="video-details__title">{video[0].title}</h2>
        <hr className="video-details__divider" />
        <div className="video-details__info">
          <div>
            <h4 className="video-details__author">By {video[0].channel}</h4>
            <p className="video-details__date">
              {new Date(videoDetails[0].timestamp).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="video-details__userInfo">
            <p className="video-details__views">
              <img
                className="video-details__views-icon"
                src={viewIcon}
                alt="user views"
              />
              {videoDetails[0].views}
            </p>
            <p>
              <img
                className="video-details__likes-icon"
                src={heartIcon}
                alt=""
              />
              {videoDetails[0].likes}
            </p>
          </div>
        </div>
        <hr className="video-details__divider" />
        <div className="video-details__description">
          {videoDetails[0].description}
        </div>
      </div>
    </>
  );
}

export default MainVideo;
