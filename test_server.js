var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'web3test.html'))
})



server = app.listen(port , () => console.log('Listening on port ' + port))
