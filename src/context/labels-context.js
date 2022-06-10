import { createContext, useContext, useReducer } from "react";
import { labelsReducer } from "../reducer/labels-reducer";

const initialLabelState = {
  labels: ["Home"],
};

const LabelsContext = createContext();

const LabelsProvider = ({ children }) => {
  const [labelsState, labelsDispatch] = useReducer(
    labelsReducer,
    initialLabelState
  );

  return (
    <LabelsContext.Provider value={{ labelsState, labelsDispatch }}>
      {children}
    </LabelsContext.Provider>
  );
};

const useLabels = () => useContext(LabelsContext);

export { LabelsProvider, useLabels };
