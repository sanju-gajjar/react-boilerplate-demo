/*
 *
 * Sample actions
 *
 */

import { DEFAULT_ACTION, CALLFUNCTION_ACTION, DATA_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function callfunctionAction() {
  return {
    type: CALLFUNCTION_ACTION,
  };
}
export function dataAction() {
  return {
    type: DATA_ACTION,
  };
}
