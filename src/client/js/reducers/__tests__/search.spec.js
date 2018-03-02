import { setSearchValue, setSearchParam } from '../../actions';
import search from '../search.js';
import { actionTypes } from '../../config.js';

describe('search reducer', () => {
	const initialState = {searchValue: '', searchParam: 'BY_TITLE'}

	it('should handle initial state', () => {
		expect(search(undefined, {})).toEqual(initialState);
	});

	it('should handle SET_SEARCH_VALUE', () => {
		expect(search(initialState, {
			type: actionTypes.SET_SEARCH_VALUE,
			value: 'ololo'
		})).toEqual({
			searchValue: 'ololo',
			searchParam: 'BY_TITLE'
		})
	});

	it('should handle SET_SEARCH_PARAM', () => {
		expect(search(initialState, {
			type: actionTypes.SET_SEARCH_PARAM,
			param: 'BY_AUTHOR'
		})).toEqual({
			searchValue: '',
			searchParam: 'BY_AUTHOR'
		})
	});
});