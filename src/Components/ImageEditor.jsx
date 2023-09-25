import { useState } from "react";

const ImageEditor = () => {
  const [filterValue, setFilterValue] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/vaomydzwzbavlxugyp6e"
  );

  async function getImages() {
    const response = await fetch("https://source.unsplash.com/random");
    console.log(response);
    setImageUrl(response.url);
  }
  return (
    <div className="section">
      <h2>Image Editor</h2>
      <button onClick={getImages}>Fetch New Image</button>
      <div className="image-area">
        <img style={{ filter: `${filterValue}` }} src={imageUrl} alt="image" />
      </div>
      <div className="editor-area">
        <div
          className="filter greyscale"
          onClick={() => setFilterValue("grayscale(1)")}
        >
          Tokyo
        </div>
        <div
          className="filter hue"
          onClick={() => setFilterValue("hue-rotate(45deg)")}
        >
          Paris
        </div>
        <div
          className="filter invert"
          onClick={() => setFilterValue("sepia(1)")}
        >
          Dublin
        </div>
        <div
          className="filter contrast"
          onClick={() => setFilterValue("contrast(0.5)")}
        >
          Merlin
        </div>
        <div
          className="filter brightness"
          onClick={() => setFilterValue("brightness(0.5)")}
        >
          Twuvo
        </div>
        <div className="filter none" onClick={() => setFilterValue("")}>
          None
        </div>
      </div>
      {filterValue && <button>Download Image</button>}
    </div>
  );
};

export default ImageEditor;
