export const setShips = (ships) => {
  return {
    type: "SET_SHIPS",
    payload: { ships: ships },
  };
};
