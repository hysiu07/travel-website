const LOGG_IN_USER: string = 'user/LOGG_IN_USER';
const LOGG_OUT_USER: string = 'user/LOGG_OUT_USER';
const ADD_BEST_TRAVELS: string = 'user/ADD_BEST_TRAVELS';
const REMOVE_BEST_TRAVELS: string = 'user/REMOVE_BEST_TRAVELS';
const ADD_RESERVATION: string = 'user/ADD_RESERVATION';

export type UserTypeReducer = {
	user: {
		name: string;
		email: string;
		isLoggIn: boolean;
		bestTravels?: string[];
		reservation?: {
			travel: string;
			country: string;
			airPort: string;
			price: number;
			insurance: string;
			insurancePrice: number;
			dateEnd: string;
			dateStart: string;
			food: string;
			amountPersons: number;
		};
	};
};

const INITIAL_STATE_REGISTERED: UserTypeReducer = {
	user: {
		name: '',
		email: '',
		isLoggIn: false,
		bestTravels: [],
	},
};

export const loggInUser = (user: UserTypeReducer) => ({
	type: LOGG_IN_USER,
	payload: user,
});
export const handleLoggOutUser = () => ({ type: LOGG_OUT_USER });

export const addBestTravels = (hotelName: string) => ({
	type: ADD_BEST_TRAVELS,
	payload: hotelName,
});
export const addReservation = (reservation: any) => ({
	type: ADD_RESERVATION,
	payload: reservation,
});
export const removeBestTravel = (hotelName: string) => ({
	type: REMOVE_BEST_TRAVELS,
	payload: hotelName,
});

export const reducerUserInfo = (
	state = INITIAL_STATE_REGISTERED,
	action: any
) => {
	switch (action.type) {
		case LOGG_IN_USER:
			return {
				user: action.payload,
			};
		case LOGG_OUT_USER:
			return {
				user: {
					name: '',
					email: '',
					isLoggIn: false,
					bestTravels: [],
				},
			};
		case ADD_BEST_TRAVELS:
			return {
				...state,
				user: {
					...state.user,
					bestTravels: Array.isArray(state.user.bestTravels)
						? [...state.user.bestTravels, action.payload]
						: [action.payload],
				},
			};
		case REMOVE_BEST_TRAVELS:
			return {
				...state,
				user: {
					...state.user,
					bestTravels:
						Array.isArray(state.user.bestTravels) &&
						state.user.bestTravels.filter((item) => {
							return item !== action.payload;
						}),
				},
			};
		case ADD_RESERVATION:
			return {
				...state,
				user: {
					...state.user,
					reservation: action.payload,
				},
			};
		default:
			return state;
	}
};
