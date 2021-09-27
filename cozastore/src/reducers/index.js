import {combineReducers} from "redux"
import { loadingBarReducer } from "react-redux-loading-bar";
import { productsReducer } from "./products"
import { productReducer } from "./product";
import { articlsReducer } from "./articls"
import { articleReducer } from './article';
import { userReducers } from "./user"
import { cartReducers } from "./addCart";
import { favReducers } from "./addFavorite";
import { iconFavReducers } from './addIconfavorite';
import { orderReducers } from './order';
export const reducers=combineReducers({
    products:productsReducer,
    product:productReducer,
    articls:articlsReducer,
    article:articleReducer,
    user:userReducers,
    cart:cartReducers,
    favorite:favReducers,
    icon:iconFavReducers,
    order:orderReducers,
    loadingBar: loadingBarReducer
})
