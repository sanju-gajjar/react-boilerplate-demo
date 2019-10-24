/*
 *
 * Sample reducer
 *
 */
import { fromJS } from 'immutable';
import { DEFAULT_ACTION, DATA_ACTION } from './constants';

const initialState = fromJS({
  promptForReapply: false,
});
/* eslint-disable default-case, no-param-reassign */
function sampleReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      break;
    case DATA_ACTION:
      return state.set('promptForReapply', true);
    default:
      return state;
  }
  return state;
}
export default sampleReducer;
