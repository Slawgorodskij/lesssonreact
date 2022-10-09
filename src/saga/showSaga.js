import {put, takeEvery} from 'redux-saga/effects'
import {answerMessagesAction, ASYNC_ANSWER_MESSAGE} from "../store/messages/messagesReducer";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* answerMessagesWorker(payload) {
    yield delay(1500);
    yield put(answerMessagesAction(payload))
}

export function* showWatcher() {
yield takeEvery(ASYNC_ANSWER_MESSAGE, answerMessagesWorker)
}
