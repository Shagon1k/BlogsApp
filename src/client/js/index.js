import React from 'react';
import {render, hydrate} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import blogsApp from './reducers';
import App from './components/App.jsx';
import '../styles/main.scss';

const initialState = {
	blogs: [
				{author: "Author One", title: "Title One", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."},
				{author: "Author Two", title: "Title Two", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."},
				{author: "Author Three", title: "Title Three", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."},
				{author: "Author Four", title: "Title Four", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."},
				{author: "Author Five", title: "Title Five", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."},
				{author: "Author Six", title: "Title Six", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."},
				{author: "Author Seven", title: "Title Seven", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."}
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
		<App />
	</Provider>,
	document.getElementById("app")
);