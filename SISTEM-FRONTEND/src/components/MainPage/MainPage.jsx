import Blog from "./Blog";
import States from "./States";
import "./MainPage.css";

export default function ManinPage() {
  return (
    <>
      <div className="mainpage-container">
        {/* Carousel Section */}
        <div>
          <Blog />
          <States />
        </div>
      </div>
    </>
  );
}
