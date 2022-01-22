import memes from "./memesData";
import { useState } from "react";

export default function Main() {
  const [imgUrl, setImgUrl] = useState(false);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const handleClick = () => {
    setImgUrl(memes[Math.floor(Math.random() * memes.length)].url);
  };

  const topChange = (e) => {
    setTopText(e.target.value);
  };

  const bottomChange = (e) => {
    setBottomText(e.target.value);
  };

  return (
    <main>
      <div className="wrapper">
        <div className="input-box">
          <input
            type="text"
            className="top-input textInput"
            placeholder="Enter top text"
            value={topText}
            onChange={topChange}
          />
          <input
            type="text"
            className="bottom-input textInput"
            placeholder="Enter bottom text"
            value={bottomText}
            onChange={bottomChange}
          />
        </div>
        <div className="button-box">
          <button onClick={handleClick}>Generate New Random Meme</button>
        </div>
      </div>
      {imgUrl && (
        <div className="image-box">
          <h3 className="top">{topText.toUpperCase()}</h3>
          <h3 className="bottom">{bottomText.toUpperCase()}</h3>
          <img src={imgUrl} alt="" />
        </div>
      )}
    </main>
  );
}
