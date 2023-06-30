import { combineReducers } from "redux";
import authReducer from "./authReducer";
import ticketReducer from "./ticketReducer";
// import userReducer from "./userReducer";
// import vendorReducer from "./vendorReducer";
// import categoryReducer from "./categoryReducer";
// import driverReducer from "./driverReducer";
// import carReducer from "./carReducer";
// import carTypeReducer from "./carTypeReducer";
// import carModelReducer from "./carModelReducer";
// import yearReducer from "./yearReducer";
// import colorReducer from "./colorReducer";
// import rideReducer from "./rideReducer";
// import userRideReducer from "./userRideReducer";
// import driverPromotion from "./driverPromotion";
// import userPromotion from "./userPromotion";

export default combineReducers({
    auth: authReducer,
    ticket:ticketReducer,
    
    // allUsers: userReducer,
    // allVendors: vendorReducer,
    // allCategory: categoryReducer,
    // allDriver: driverReducer,
    // allcarMake: carReducer,
    // allcarType: carTypeReducer,
    // allCarModel: carModelReducer,
    // allYear:yearReducer,
    // allColor:colorReducer,
    // rides: rideReducer,
    // userRides: userRideReducer,
    // userPromotion: userPromotion,
    // driverPromotion: driverPromotion,

});
