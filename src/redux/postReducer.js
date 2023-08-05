const initialState = {
    posts: [],
    loading: true,
    error: null,
  };
  
 export const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_SUCCESS':
        return {
          ...state,
          posts: action.payload,
          loading: false,
        };
      case 'FETCH_POSTS_FAILURE':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  

  
  