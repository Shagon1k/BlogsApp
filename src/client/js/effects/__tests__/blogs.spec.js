import { fetchBlogsCall, normalizeBlogsData } from '../blogs.js';

//TODO: Add tests for API blogs calls

describe('normalizeBlogsData', () => {
	let dummyData = [
		{
			_id: 1,
			title: 'title1',
			author: 'author1',
			message: 'message1',
			date: '2018-03-01T13:37:08.068Z'
		},
		{
			_id: 2,
			title: 'title2',
			author: 'author2',
			message: 'message2',
			date: '2018-03-01T13:33:08.068Z'
		},
		{
			_id: 3,
			title: 'title3',
			author: 'author3',
			message: 'message3',
			date: '2018-03-01T13:35:08.068Z'
		}
	],
		normalizedData = [
		{
			id: 1,
			blog: {
				title: 'title1',
				author: 'author1',
				message: 'message1',
				date: '2018-03-01T13:37:08.068Z'
			}
		},
		{
			id: 3,
			blog: {
				title: 'title3',
				author: 'author3',
				message: 'message3',
				date: '2018-03-01T13:35:08.068Z'
			}
		},
		{
			id: 2,
			blog: {
				title: 'title2',
				author: 'author2',
				message: 'message2',
				date: '2018-03-01T13:33:08.068Z'
			}
		}
	]
	it('normalize passed json', () => {
		expect(normalizeBlogsData(dummyData)).toEqual(normalizedData);
	});
});

