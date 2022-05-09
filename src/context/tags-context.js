import { createContext,useContext,useReducer } from "react";
import {v4 as uuid} from "uuid";


const initialTagState = {
    tags: [
        {id: uuid(), tagName: "home" },
        {id: uuid(), tagName: "work" },
    ],
    tagsModalVisible: false
}

const TagsContext = createContext();


const TagsProvider = ({children})=>{

    const [tagsState, tagsDispatch] = useReducer(tagsReducer, initialTagState)
    return (
        <TagsContext.Provider value={{tagsState, tagsDispatch}}>
            {children}
        </TagsContext.Provider>
    )
}

const useTags = ()=> useContext(TagsContext)

export {TagsProvider, useTags}