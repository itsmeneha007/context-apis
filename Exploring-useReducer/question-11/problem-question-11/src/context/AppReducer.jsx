export const initialState = {
  countries: [],
  filteredCountries: [],
  search: "",
  page: 1,
  perPage: 10,
};
export const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNTRIES":
      return { ...state, countries: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload, page: 1 };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
};