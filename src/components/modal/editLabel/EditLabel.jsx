import { BsCheckLg, BsXLg } from "react-icons/bs";
import { useState } from "react";
import { useLabels } from "../../../context/labels-context";
import "./EditLabel.css";
import { convertStringFirstLetterCapital } from "../../../helpers/notesHelpers";

const EditLable = ({setLabelModalVisible}) => {

  const {labelsState, labelsDispatch} = useLabels();
 const [inputLabel, setInputLabel] = useState('');

 const deleteLabelHandler = (label)=>{
   
   const labelToDelete = labelsState.labels.filter(item => item !== label) ;
  
   labelsDispatch({type: "DELETE_LABELS", payload: labelToDelete})

 }

  return (
    <div className="modal-background">
      <div className="modal-container label-modal">
        <h4 className="modal-title">Edit Labels</h4>
        <div className="input-container">
          <input 
          type="text" 
          placeholder="Enter Label.." 
          name="input-label"
          value={inputLabel}
          onChange = {(e)=> setInputLabel(e.target.value)}
          />
          <button 
          disabled= {inputLabel.length < 1 || inputLabel.length >8}
          className="btn btn-check" 
          onClick={()=>{
            labelsDispatch({type:"ADD_LABELS", payload: inputLabel});
            setInputLabel("")
            }}>
            <BsCheckLg />
          </button>
        </div>
        {(inputLabel.length < 0 || inputLabel.length >8) ? (<div className="error-msg md-text">Maximum Length: 8</div>) : null}
        <ul className="modal-lists">
          {labelsState.labels.map((label,index )=>(
            <li key={index}>
               <h4>{convertStringFirstLetterCapital(label)}</h4>
            <button className="btn btn-check">
              <BsXLg onClick={()=>deleteLabelHandler(label)}/>
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
