import UserReducer from "Redux/User/UserReducer";
import mainReducer from "Redux/features/MainSlice";
import { createStore, combineReducers } from "redux";
import DestinationReducer from "../Destination/DestinationReducer";
import HotelReducer from "Redux/Hotel/HotelReducer";
import RestaurantReducer from "Redux/Restaurant/RestaurantReducer";
import TransportReducer from "Redux/Transport/TransportReducer";
import EventReducer from "Redux/Event/EventReducer";
const rootReducer = combineReducers({
  mainSlice: mainReducer,
  user:UserReducer,
  destination:DestinationReducer,
  hotel:HotelReducer,
  restaurant:RestaurantReducer,
  transport:TransportReducer,
  event:EventReducer,
});

export const store = createStore(rootReducer);

