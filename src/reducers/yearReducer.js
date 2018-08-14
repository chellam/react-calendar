import initialState from '../initialState';

export default function yearReducer(state = initialState.year, action) {
    //debugger;
    switch (action.type) {
      case 'UPDATE_YEAR':
        return action.year;
  
      default:
        return state;
    }
  }  