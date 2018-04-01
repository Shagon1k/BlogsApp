import { saveState, loadState, getExpiryDate, isValidCache } from '../appstate.js';
import { APP_STATE_KEY, CACHE_EXPIRING_KEY, CACHE_EXPIRING_MINUTES } from '../../config.js';
import './localstorage.mock.js';

describe('saveState', () => {
	it('should save current state', () => {
		const dummyState = {
			param_one: 'fake_value',
			param_two: 'fake_value_2'
		};
		saveState(dummyState);
		expect(localStorage.getItem(APP_STATE_KEY)).toEqual(JSON.stringify(dummyState));
	});
});

describe('getExpiryDate', () => {
	it('should return expiry date according to passed', () => {
		let dummyDate = new Date();
		let enterDate = new Date(dummyDate);
		
		const expectedExpiryDate = dummyDate.setMinutes(dummyDate.getMinutes() + CACHE_EXPIRING_MINUTES);
		expect(getExpiryDate(enterDate)).toEqual(new Date(expectedExpiryDate));
	});
});