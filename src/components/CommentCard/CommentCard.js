import placeHolder from "../../Assets/Images/placeholder.png";
import videoDetails from "../../Data/video-details.json";
import "./commentCard.scss";

function CommentCard() {
  return (
    <>
      <section className="comments-archieve">
        <div className="comments-archieve__outer">
          <hr className="comments-archieve__hr" />
          <div className="comments-archieve__comment">
            <img className="comments-archieve__icon" src={placeHolder} />
            <div className="comments-archieve__com-container">
              <div className="comments-archieve__name-date">
                <span>{videoDetails[0].comments[0].name}</span>
                <span className="comments-archieve__span-right">
                  {new Date(
                    videoDetails[0].comments[0].timestamp
                  ).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="comments-archieve__text">
                {videoDetails[0].comments[0].comment}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CommentCard;
