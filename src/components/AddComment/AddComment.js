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
          <div className="comments__input-wrapper">
            <label className="comments__form-label" htmlFor="comments">
              JOIN THE CONVERSATION
              <textarea
                className="comments__comment-field"
                id="comments"
                type="text"
                placeholder="Add a new comment"
              ></textarea>
            </label>
          </div>
          <div className="comments__btn-wrapper">
            <input
              type="submit"
              className="comments__submit-btn"
              value="COMMENT"
              maxlength="40"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddComment;
