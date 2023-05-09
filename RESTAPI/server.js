const express = require('express');
const absenceRoutes = require('./src/absence/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use("/api/v1/absence", absenceRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`))