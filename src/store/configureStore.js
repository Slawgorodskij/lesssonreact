import {combineReducers, createStore} from "redux";
import {chatsReducer} from "./chatsReducer";
import {messagesReducer} from "./messagesReducer";

const rootReducer = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer,
})

export const store = createStore(rootReducer)