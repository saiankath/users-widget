import {delItem, setItem} from "./Actions"



const initialState = {
   data:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case delItem : 
          return  {
              ...state,
           data:action.data
        };
        case setItem :
                return  {
                    ...state,
                data: action.data
                }
        default :
            return state
    }
};

export default reducer;