import { SideNav } from "../../components";
import "./Trash.css"

const Trash = () => {
  return (
    <div className="main-container">
      <SideNav />
      <div className="empty-trash-container">
          <div className="empty-trash-content text-center">
          <figure>
          <img src="./assets/trash.png" className="empty-trash-img img-responsive" alt="empty-bin" />
        </figure>
        <p className="empty-trash-desc lg-text">Nothing in the Trash</p>
          </div>
      
      </div>
    </div>
  );
};

export { Trash };
