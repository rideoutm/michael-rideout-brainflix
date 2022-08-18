import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import "./App.scss";
import AddComment from "./components/AddComment/AddComment";
import CommentCard from "./components/CommentCard/CommentCard";

function App() {
  return (
    <>
      <Header />
      <MainVideo />
      <AddComment />
      <CommentCard />
    </>
  );
}

export default App;
