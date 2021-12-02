const initialState = {
  ship: {},
};

export const shipDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_SHIP":
      return { ...state, ship: payload.ship };

    default:
      return state;
  }
};
