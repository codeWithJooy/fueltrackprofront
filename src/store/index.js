import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import logger, {createLogger} from "redux-logger"
import rootReducer from "../reducers"

const loggerMiddleware=createLogger();
const store=createStore(
    rootReducer,
    applyMiddleware(thunk,loggerMiddleware)
)

export default store;