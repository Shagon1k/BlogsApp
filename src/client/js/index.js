import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import blogsApp from './reducers';
import App from './components/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/main.scss';

const initialState = {
	blogs: [
				{
					id:'1',
					blog: {author: "Author One", title: "Title One", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."}
				},
				{
					id:'2',
					blog: {author: "Author Two", title: "Title Two", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."}
				},
				{
					id:'3',
					blog: {author: "Author Three", title: "Title Three", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."}
				},
				{
					id:'4',
					blog: {author: "Author Four", title: "Title Four", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."}
				},
				{
					id:'5',
					blog: {author: "Author Five", title: "Title Five", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."}
				},
				{
					id:'6',
					blog: {author: "Author Six", title: "Title Six", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."}
				},
				{
					id:'7',
					blog: {author: "Author Seven", title: "Title Seven", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."}
				}		
		],
	search: {
		searchValue: '',
		searchParam: 'BY_TITLE'
	},
	modals: []
};

const store = createStore(blogsApp, initialState);

render(
	<Provider store={store}>
		<Router path='/'>
			<App />
		</Router>
	</Provider>,
	document.getElementById("app")
);