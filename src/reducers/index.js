const initialState = {
    count: 0,
    products: [],
    cart: []
  }
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC': {
            return {...state, count: state.count + 1};
        }

      default:
        return state;
    }
  }
