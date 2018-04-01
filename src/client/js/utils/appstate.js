import { APP_STATE_KEY, CACHE_EXPIRING_KEY, CACHE_EXPIRING_MINUTES } from '../config.js';

export const saveState = state => {
	try {
		localStorage.setItem(APP_STATE_KEY, JSON.stringify(state));
		localStorage.setItem(CACHE_EXPIRING_KEY, getExpiryDate(new Date()).toISOString());
	}
	catch (e) {
		throw new Error ('Failed to save state to localStorage');
	}
}

export const loadState = () => {
	let state = localStorage.getItem(APP_STATE_KEY),
		cacheExpiring = localStorage.getItem(CACHE_EXPIRING_KEY);

	if (state !== null && cacheExpiring !== null && isValidCache(cacheExpiring)) {
		localStorage.setItem(CACHE_EXPIRING_KEY, getExpiryDate(new Date()).toISOString());
		return JSON.parse(state);
	} else {
		return false;
	}
}

export function getExpiryDate(date) {
	let expiryDate = date.setMinutes(date.getMinutes() + CACHE_EXPIRING_MINUTES);
	return new Date(expiryDate);
}

export function isValidCache(date) {
	let expiryDate = new Date(date),
		currentDate = new Date();

	return (expiryDate - currentDate) > 0;
}