import Blog from "./Blog";
import States from "./States";
import "./MainPage.css";
import Navbar from "../Login/Navbar";

export default function ManinPage() {
  return (
    <>
      <div className="mainpage-container">
        {/* Carousel Section */}
        <div>
          <Blog />
          <States />
          <Navbar />
        </div>
      </div>
    </>
  );
}
