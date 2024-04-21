import UserReducer from "Redux/User/UserReducer";
import mainReducer from "Redux/features/MainSlice";
import { createStore, combineReducers } from "redux";
import DestinationReducer from "../Destination/DestinationReducer";
import HotelReducer from "Redux/Hotel/HotelReducer";
const rootReducer = combineReducers({
  mainSlice: mainReducer,
  user:UserReducer,
  destination:DestinationReducer,
  hotel:HotelReducer,
});

export const store = createStore(rootReducer);

