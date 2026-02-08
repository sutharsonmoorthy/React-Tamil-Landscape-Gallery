import React, { useState } from "react";
import FrontPage from "./component/FrontPage";
import Gallery from "./component/Gallery";
import "./App.css";

function App() {
  const [openGallery, setOpenGallery] = useState(false);

  return (
    <div>
      {openGallery ? (
        <Gallery
          onBack={function () {
            setOpenGallery(false);
          }}
        />
      ) : (
        <FrontPage
          onEnter={function () {
            setOpenGallery(true);
          }}
        />
      )}
    </div>
  );
}

export default App;