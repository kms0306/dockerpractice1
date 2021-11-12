const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send("학번 : 2017320237 이름 : 김명수")
})

app.listen(port, () => {
	console.log("listen : "+port)
})
