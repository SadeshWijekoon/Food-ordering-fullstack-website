import { assets } from "../../assets/assets";
import "./App download.css";

const Appdownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        We are avalable on <br /> Tomato App
      </p>
      <div className="app-dow-plat">
        <img src={assets.play_store} />
        <img src={assets.app_store} />
      </div>
    </div>
  );
};

export default Appdownload;
