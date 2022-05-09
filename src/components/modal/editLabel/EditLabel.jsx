import { BsCheckLg, BsXLg } from "react-icons/bs";
import { useState } from "react";
import { useLabels } from "../../../context/labels-context";
import "./EditLabel.css";

const EditLable = ({setLabelModalVisible}) => {

  const {labelsState, labelsDispatch} = useLabels();
 const [inputLabel, setInputLabel] = useState('')

  return (
    <div className="modal-background">
      <div className="modal-container">
        <h4 className="modal-title">Edit Labels</h4>
        <div className="input-container">
          <input 
          type="text" 
          placeholder="Enter Label.." 
          name="input-label"
          value={inputLabel}
          onChange = {(e)=> setInputLabel(e.target.value)}
          />
          <button className="btn btn-check" onClick={()=>labelsDispatch({type:"ADD_LABELS", payload: inputLabel})}>
            <BsCheckLg />
          </button>
        </div>
        <ul className="modal-lists">
          {labelsState.labels.map((label,index )=>(
            <li key={index}>
               <h4>{label}</h4>
            <button className="btn btn-check">
              <BsXLg />
            </button>
            </li>
          ))}
         
        </ul>
        <div className="modal-btns">
          <button
            className="btn btn-outline-primary"
            onClick={()=> setLabelModalVisible(false)}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
export { EditLable };
