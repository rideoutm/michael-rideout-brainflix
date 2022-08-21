import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";

import "./App.scss";

function App() {
  return (
    <>
      <Header />

      {/* Parent Container of AddComment, CommentCardContainer, NextVideoList */}
      <MainVideo />
    </>
  );
}

export default App;
