// ActionTypes
const OPEN_DRAWER = "OPEN_DRAWER";
const HANDLE_SIDEBAR = "HANDLE_SIDEBAR";
const HANDLE_SIDENAV_TYPE = "HANDLE_SIDENAV_TYPE";
const HANDLE_SIDENAV_COLOR = "HANDLE_SIDENAV_COLOR";
const HANDLE_FIXED_NAVBAR = "HANDLE_FIXED_NAVBAR";
const SET_PLACEMENT = "SET_PLACEMENT";

// Action Creators
export const openDrawer = (payload) => ({
  type: OPEN_DRAWER,
  payload,
});

export const handleSidebar = (payload) => ({
  type: HANDLE_SIDEBAR,
  payload,
});

export const handleSidenavType = (payload) => ({
  type: HANDLE_SIDENAV_TYPE,
  payload,
});

export const handleSideNavColor = (payload) => ({
  type: HANDLE_SIDENAV_COLOR,
  payload,
});

export const handleFixedNavbar = (payload) => ({
  type: HANDLE_FIXED_NAVBAR,
  payload,
});

export const setPlaceMent = (payload) => ({
  type: SET_PLACEMENT,
  payload,
});

// Reducer
const initialState = {
  visible: false,
  placement: "right",
  sideNavColor: "#26baeb",
  sideNavType: "transparent",
  navFixed: false,
  openSidebar: false,
};

export default function mainReducer (state = initialState, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        ...state,
        visible: action.payload != null ? action.payload : !state.visible,
      };
    case HANDLE_SIDEBAR:
      return {
        ...state,
        openSidebar: action.payload != null ? action.payload : !state.openSidebar,
      };
    case HANDLE_SIDENAV_TYPE:
      return {
        ...state,
        sideNavType: action.payload,
      };
    case HANDLE_SIDENAV_COLOR:
      return {
        ...state,
        sideNavColor: action.payload,
      };
    case HANDLE_FIXED_NAVBAR:
      return {
        ...state,
        navFixed: action.payload,
      };
    case SET_PLACEMENT:
      return {
        ...state,
        placement: action.payload,
      };
    default:
      return state;
  }
};


