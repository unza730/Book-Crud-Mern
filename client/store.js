import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import getAllPizzaReducer from "./reducers/pizzaReducer";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import { LoginUserReducer, RegisterUserReducer } from "./reducers/userReducer";
import { getUserOrdersReducer, placeOrderReducer } from "./reducers/orderReducer";

const rootReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    cartReducer: cartReducer, 
    registerUserReducer: RegisterUserReducer,
  loginUserReducer: LoginUserReducer,
  placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer,
})
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;

