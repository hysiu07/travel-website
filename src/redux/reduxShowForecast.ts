const SHOW_FORECAST: string = 'weather/SHOW_FORECAST';
const HIDDEN_FORECAST: string = 'weather/HIDDEN_FORECAST';

const INITIAL_STATE_SHOW_FORECAST = {
	showForecast: false,
};

export const handleShowForecast = () => ({
	type: SHOW_FORECAST,
});
export const handleHiddenForecast = () => ({ type: HIDDEN_FORECAST });

export const reducerShowForecast = (
	state = INITIAL_STATE_SHOW_FORECAST,
	action: any
) => {
	switch (action.type) {
		case SHOW_FORECAST:
			return {
				showForecast: true,
			};
		case HIDDEN_FORECAST:
			return {
				showForecast: false,
			};

		default:
			return state;
	}
};
