import {
    applyMiddleware,
    combineReducers,
    createStore,
  } from "@reduxjs/toolkit";
  import thunk from "redux-thunk";
import { BugAssignReducer } from "./BugAssignReducer";
import { BugReducer } from "./BugReducer";
import { StaffProfileReducer } from "./StaffProfileReducer";
import { StaffReducer} from "./StaffReducer";
import { CustomerReducer } from "./CustomerReducer";
import { CustomerProfileReducer } from "./CustomerProfileReducer";
import { CustomerLoginReducer} from "./CustomerLoginReducer";


  const rootReducer = combineReducers({

    staff: StaffReducer,
    staffProfile:StaffProfileReducer,
    bug : BugReducer,
    bugAssign : BugAssignReducer,
    customerlogin: CustomerLoginReducer,
    customer: CustomerReducer,
    customerProfile: CustomerProfileReducer,
  });
  
  const store = createStore(rootReducer, applyMiddleware(thunk));
  export { store };
  
  // HOW TO ACCESS THE STORE IN COMPOENNT
  // state.user.authSuccess
  