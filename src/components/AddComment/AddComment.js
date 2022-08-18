import userImage from "../../Assets/Images/Mohan-muruge.jpg";
import "./addComment.scss";

function AddComment() {
  return (
    <section className="comments">
      <div className="comments__counter">
        <h4>3 Comments</h4>
      </div>
      <div className="comments__main-container">
        <img
          className="comments__comment-icon"
          src={userImage}
          alt="user image"
        />

        <form className="comments__form-container" action="URL" method="POST">
          <label className="comments__form-label" for="comments">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="comments__comment-field"
            id="comments"
            type="text"
            placeholder="Add a new comment"
          ></textarea>

          <input
            type="submit"
            className="comments__submit-btn"
            value="COMMENT"
            maxlength="40"
          />
        </form>
      </div>
    </section>
  );
}

export default AddComment;
