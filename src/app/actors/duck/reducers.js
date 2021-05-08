import types from './types';

const INITIAL_STATE = {
  listName: 'Best',
  list: ['Tom Hardy', 'Julia Roberts', 'Angelina Jolie']
};

const actorsReducer = (state = initialActors, action) => {
  switch (action.type) {
    case types.ADD_ACTOR:
      return {
        ...state,
        list: [...state.list, action.item]
      };

    case types.RESET_ACTORS:
      return { ...state, list: [] };
    default:
      return state;
  }
};

export default actorsReducer;