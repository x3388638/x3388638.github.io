import { handleActions } from 'redux-actions'
import { changeTo } from '../actions/section'

const initialState = {
  name: 'Jumbo'
}

const reducerMap = {
  [changeTo]: (state, action) => ({ ...state, name: action.payload })
}

export default handleActions(reducerMap, initialState)
