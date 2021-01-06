const express = require("express");
const app = express();
const PORT = 8888;
const path = require('path');

// this is how we set up use of the bundled files
app.use(express.static('dist'))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/../index.html'));
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));