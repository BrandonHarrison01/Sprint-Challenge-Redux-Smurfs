/*
  Be sure to import in all of the action types from `../actions`
*/
import { SMURF_FETCHING, SMURF_SUCCESS, SMURF_FAILURE, SMURF_ADD } from '../actions';


//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
  //  updatingSmurf: false
  //  deletingSmurf: false
   error: null
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURF_FETCHING:
      return {
        ...state,
        error: null,
        fetchingSmurfs: true
      }
    case SMURF_SUCCESS:
      // console.log(action.payload)
      return {
        ...state,
        error: null,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    case SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: 'there was a problem'
      }
    case SMURF_ADD:
      return{
        ...state,
        fetchingSmurfs: false,
        error: null,
        smurfs: action.payload
      };
    default:
      return state;
  }
}