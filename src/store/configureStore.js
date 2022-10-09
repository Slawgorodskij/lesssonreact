import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from "./chats/chatsReducer";
import {messagesReducer} from "./messages/messagesReducer";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";
import createSagaMiddleware from 'redux-saga';
import {showWatcher} from "../saga/showSaga";

const sagaMiddleware = createSagaMiddleware();

const config = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
})

const persistedReducer = persistReducer(config, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

sagaMiddleware.run(showWatcher)