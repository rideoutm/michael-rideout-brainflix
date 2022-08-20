import placeHolder from "../../Assets/Images/placeholder.png";
// import videoDetails from "../../Data/video-details.json";
import "./commentCard.scss";

function CommentCard({ comment, key }) {
  console.log("comment Card: ", comment, key);
  return (
    <>
      <div key={key} className="comments-archieve__outer">
        <hr className="comments-archieve__hr" />
        <div className="comments-archieve__comment">
          <img className="comments-archieve__icon" src={placeHolder} />
          <div className="comments-archieve__com-container">
            <div className="comments-archieve__name-date">
              <span>{comment.name}</span>
              <span className="comments-archieve__span-right">
                {new Date(comment.timestamp).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="comments-archieve__text">{comment.comment}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentCard;
