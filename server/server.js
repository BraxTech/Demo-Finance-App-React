const express = require('express');
const app = express();
const port = 3001;
app.use('/', () => {});

app.listen(() => {
	console.log(`Server is now listen on port ${port}`);
});
