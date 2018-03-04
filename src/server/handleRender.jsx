import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Provider from 'react-redux';
import configureStore from '../client/js/configureStore.js';
import App from '../client/js/containers/App.jsx';

const renderFullPage = (html, preloadedState) => {
	return `<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					   <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
					<title>BlogsApp</title>
					<link rel="stylesheet" href="style.css">
					<script defer src="bundle.js"></script>
				</head>
				<body>
					<div id="app">${html}</div>
					<div id="modal-root" class="modalContainer"></div>
					<script>
				        // WARNING: See the following for security issues around embedding JSON in HTML:
				        // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
				        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
			        </script>
				</body>
				</html>`
}

const handleRender = (req, res, next) => {
	const store = configureStore();
	const context = {};
	const app = (
		<Provider store={store}>
			<StaticRouter location={req.url} context={context}>
				<App />
			</StaticRouter>
		</Provider>
		)
	const renderedApp = ReactDOMServer.renderToString(app);

	if(context.url) {
		return res.redirect(context.url)
	}

	const preloadedState = store.getState();

	return res.send(renderFullPage(renderedApp, preloadedState));
}

export default handleRender;