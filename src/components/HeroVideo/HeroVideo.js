import videoDetails from "../../Data/video-details.json";

function HeroVideo({ selectedIndex, setSelectedIndex }) {
  console.log(videoDetails);
  return (
    <div className="main-video">
      <video
        // selectedVideo={videoDetails[selectedIndex]}
        // setSelectedIndex={videoDetails[setSelectedIndex]}
        className="main-video__video-control"
        poster={videoDetails[setSelectedIndex].image}
        type="video/mp4"
        src="#"
        alt={videoDetails[selectedIndex].title}
        controls
      />
    </div>
  );
}

export default HeroVideo;
