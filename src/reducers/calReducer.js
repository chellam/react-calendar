import initialState from '../initialState';

export default function calReducer(state = initialState, action) {
    debugger;
    switch (action.type) {
      case 'UPDATE_CAL':
        return action.cals;
  
      default:
        return state;
    }
  }  