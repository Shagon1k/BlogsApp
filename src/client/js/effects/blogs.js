import { SERVER_URL } from '../config.js';

export const fetchBlogsCall = () =>
	fetch(`${SERVER_URL}/blogs`, {
		credentials: 'include'
	})
	.then(resp => resp.json())


export const requestAddBlogCall = blog =>
	fetch(`${SERVER_URL}/blogs/`, {
		method: 'put',
		credentials: 'include',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			title: blog.title,
			author: blog.author,
			message: blog.message
		})
	})
	.then(resp => resp.json())
	.then((resp) => {
		return {
			id: resp.blog._id,
			blog: {
				title: resp.blog.title,
				author: resp.blog.author,
				message: resp.blog.message,
				date: resp.blog.date
			}
		}
	})

export const requestDeleteBlogCall = blogId => 
	fetch(`${SERVER_URL}/blogs/${blogId}`, {
		credentials: 'include',
		method: 'delete'
	})
	.then(() => blogId)

export const normalizeBlogsData = blogsData => {
	let normBlogsData = [];
	blogsData.forEach((i) => {
		normBlogsData.push({
			id: i._id,
			blog: {
				title: i.title,
				author: i.author,
				message: i.message,
				date: i.date
			}
		})
	})

	return normBlogsData.sort((blog1, blog2) => {
		return new Date(blog2.blog.date) - new Date(blog1.blog.date);
	});
}