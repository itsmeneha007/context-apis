export const initialState = {
  name: '',
  establishment_year: '',
  address: {
    building: '',
    street: '',
    city: {
      name: '',
      locality: {
        pinCode: '',
        landmark: '',
      },
    },
    state: '',
    coordinates: {
      latitude: '',
      longitude: '',
    },
  },
  courses_offered: [], 
};

export function collegeFormReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };

    case 'SET_ESTABLISHMENT_YEAR':
      return { ...state, establishment_year: action.payload };

    case 'SET_ADDRESS_BUILDING':
      return {
        ...state,
        address: { ...state.address, building: action.payload },
      };

    case 'SET_ADDRESS_STREET':
      return {
        ...state,
        address: { ...state.address, street: action.payload },
      };

    case 'SET_ADDRESS_CITY_NAME':
      return {
        ...state,
        address: {
          ...state.address,
          city: { ...state.address.city, name: action.payload },
        },
      };

    case 'SET_ADDRESS_LOCALITY_PINCODE':
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: { ...state.address.city.locality, pinCode: action.payload },
          },
        },
      };

    case 'SET_ADDRESS_LOCALITY_LANDMARK':
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: { ...state.address.city.locality, landmark: action.payload },
          },
        },
      };

    case 'SET_ADDRESS_STATE':
      return {
        ...state,
        address: { ...state.address, state: action.payload },
      };

    case 'SET_COORDINATES_LATITUDE':
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: { ...state.address.coordinates, latitude: action.payload },
        },
      };

    case 'SET_COORDINATES_LONGITUDE':
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: { ...state.address.coordinates, longitude: action.payload },
        },
      };

    case 'ADD_COURSE':
      return {
        ...state,
        courses_offered: [...state.courses_offered, action.payload],
      };

    case 'REMOVE_COURSE':
      return {
        ...state,
        courses_offered: state.courses_offered.filter(
          (course, idx) => idx !== action.payload
        ),
      };

    case 'RESET':
      return initialState;

    default:
      throw new Error('invalid action type');
  }
}
