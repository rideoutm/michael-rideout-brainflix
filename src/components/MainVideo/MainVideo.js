// import video from "../../Data/videos.json";
// import videoDetails from "../../Data/video-details.json";
import viewIcon from "../../Assets/Icons/views.svg";
import heartIcon from "../../Assets/Icons/likes.svg";

import HeroVideo from "../HeroVideo/HeroVideo";
import AddComment from "../AddComment/AddComment";
import NextVideoList from "../NextVideoList/NextVideoList";
import CommentCardContainer from "../CommentCardContainer/CommentCardContainer";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Hero vid, main vid details, parent component for AddComments, CommentCardContainer
function MainVideo() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);

  const { videoId } = useParams();

  // NextVideoList state
  const [videos, setVideos] = useState(null);

  // Get first video
  useEffect(() => {
    const nextVideoListInfo = () => {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/?api_key=e58a42f3-22dc-45d6-9cc7-8dbcdb2b3dfd`
        )
        .then((res) => {
          const videoIdInfo = res.data[0].id;
          setSelectedIndex(videoIdInfo);

          const nextVideoData = res.data;
          setVideos(nextVideoData);
        })
        .catch((err) => console.log("ERROR: ", err));
    };

    nextVideoListInfo();
  }, []);

  //  Video Details Data
  useEffect(() => {
    const videoDetails = videoId ? videoId : selectedIndex;

    const videoDetailsInfo = () => {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${videoDetails}?api_key=e58a42f3-22dc-45d6-9cc7-8dbcdb2b3dfd`
        )
        .then((res) => {
          const vidData = res.data;
          setVideoDetails(vidData);
        })
        .catch((err) => console.log("ERROR: ", err));
    };
    videoDetailsInfo();
  }, [selectedIndex, videoId]);

  if (!videoDetails) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <HeroVideo details={videoDetails} />

      <div className="main-section">
        <div className="main-section__left">
          <div className="video-details">
            <h2 className="video-details__title">{videoDetails.title}</h2>
            <hr className="video-details__divider-top" />
            <div className="video-details__main-container">
              <div className="video-details__author-info">
                <div className="video-details__author">
                  By {videoDetails.channel}
                </div>
                <div className="video-details__date">
                  {new Date(videoDetails.timestamp).toLocaleDateString(
                    "en-US",
                    {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    }
                  )}
                </div>
              </div>
              <div className="video-details__userInfo">
                <div className="video-details__views">
                  <img
                    className="video-details__views-icon"
                    src={viewIcon}
                    alt="user views"
                  />
                  {videoDetails.views}
                </div>
                <div className="video-details__likes-container">
                  <img
                    className="video-details__likes-icon"
                    src={heartIcon}
                    alt=""
                  />
                  {videoDetails.likes}
                </div>
              </div>
            </div>
            <hr className="video-details__divider-bottom" />
            <div className="video-details__description">
              {videoDetails.description}
            </div>
          </div>

          <AddComment commentsArrayLength={videoDetails.comments} />

          <CommentCardContainer commentsArray={videoDetails.comments} />
        </div>
        <div className="main-section__right">
          <NextVideoList videos={videos} videoId={videoId} />
        </div>
      </div>
    </>
  );
}

export default MainVideo;
