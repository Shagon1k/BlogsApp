import express from 'express';
import path from 'path';
import fetch from 'isomorphic-fetch';
import React from 'react';
import handleRender from './handleRender.jsx';

global.fetch = fetch;

const port = 1488;
const app = express();

app.use(express.static('public'));

app.get('/', handleRender)

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})