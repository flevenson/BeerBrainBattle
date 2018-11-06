import { combineReducers } from 'redux';
import { questionReducer } from './questionReducer';
import { playersReducer } from './playersReducer';
import { prizeReducer } from './prizeReducer';

export const rootReducer = combineReducers({
  question: questionReducer,
  players: playersReducer,
  prize: prizeReducer
})