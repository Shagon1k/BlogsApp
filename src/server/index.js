import express from 'express';
import path from 'path';
import fetch from 'isomorphic-fetch';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/js/components/App.jsx';

global.fetch = fetch;

const port = 1488;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
	const renderedApp = ReactDOMServer.renderToString(<App/>);
	res.send(`<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					   <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
					<title>BlogsApp</title>
					<link rel="stylesheet" href="style.css">
					<script defer src="bundle.js"></script>
				</head>
				<body>
					<div id="app">${renderedApp}</div>
					<div id="modal-root" class="modalContainer"></div>
				</body>
				</html>`);
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})