import { BsCheckLg, BsXLg } from "react-icons/bs";
import "./EditLabel.css";

const EditLable = ({ setLabelModalVisible }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <h4 className="modal-title">Edit Labels</h4>
        <div className="input-container">
          <input type="text" placeholder="Enter Label.." />
          <button className="btn btn-check">
            <BsCheckLg />
          </button>
        </div>
        <ul className="modal-lists">
          <li>
            <h4>Work</h4>
            <button className="btn btn-check">
              <BsXLg />
            </button>
          </li>
          <li>
            <h4>Home</h4>
            <button className="btn btn-check">
              <BsXLg />
            </button>
          </li>
          <li>
            <h4>Office</h4>
            <button className="btn btn-check">
              <BsXLg />
            </button>
          </li>
        </ul>
        <div className="modal-btns">
          <button
            className="btn btn-outline-primary"
            onClick={() => setLabelModalVisible(false)}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
export { EditLable };
