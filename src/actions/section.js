import { createActions } from 'redux-actions'

export const { changeTo } = createActions({
  CHANGE_TO: payload => payload
})
