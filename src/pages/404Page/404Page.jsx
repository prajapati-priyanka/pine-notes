import { Link } from "react-router-dom";
import "./404Page.css";

const NotFound = () => {
  return (
    <div className="not-found ">
      <img
        src="./assets/404-img.svg"
        alt="not-found"
        className="not-found-image"
      />
      <p className="link-to-home lg-text">
        Let's go <Link to="/"> home </Link> and and try from there...
      </p>
    </div>
  );
};

export { NotFound };
