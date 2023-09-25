import React from "react";

const ImageEditor = () => {
  return (
    <div className="section">
      <h2>Image Editor</h2>
      <div className="image-area">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/vaomydzwzbavlxugyp6e"
          alt="image"
        />
      </div>
      <div className="editor-area">
        <div className="filter greyscale">Tokyo</div>
        <div className="filter hue">Paris</div>
        <div className="filter invert">Dublin</div>
        <div className="filter contrast">Merlin</div>
        <div className="filter brightness">Twuvo</div>
      </div>
    </div>
  );
};

export default ImageEditor;
