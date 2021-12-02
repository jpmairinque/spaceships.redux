const initialState = {
  ships: [],
  loading: true,
};

export const shipsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_SHIPS":
      return { ...state, ships: payload.ships, loading: false };

    default:
      return state;
  }
};
