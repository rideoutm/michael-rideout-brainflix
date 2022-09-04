import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Upload from "./pages/Upload/Upload";
import UploadComplete from "./components/UploadComp/UploadComplete";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import MainVideo from "./components/MainVideo/MainVideo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/UploadComp" element={<UploadComplete />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="videos/:videoId" element={<MainVideo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
