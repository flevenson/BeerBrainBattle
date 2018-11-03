import { combineReducers } from 'redux';
import { questionReducer } from './questionReducer';
import { playersReducer } from './playersReducer';

export const rootReducer = combineReducers({
  question: questionReducer,
  players: playersReducer
})