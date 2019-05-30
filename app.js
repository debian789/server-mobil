const express = require('express');
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const validateEmpty = (req, res, next)  => {

console.log(req.body)
	if (req.body && !Object.keys(req.body).length) {
		return res.status(500).send({ error: "data empty"});
	}

	next();
}

app.post('/create', validateEmpty, (req, res) => {
	res.status(200).send({result: 'Ok'})
})


app.listen(3000, () => {
	console.log('server listening on port 3000');
})
