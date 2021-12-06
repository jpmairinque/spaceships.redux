export const setShipDetail = (ship) => {
  return {
    type: "SET_SHIP",
    payload: { ship: ship },
  };
};
