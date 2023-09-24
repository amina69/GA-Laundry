const express = require('express');

const app = express()




app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))



app.get('/', (req, res) => {
    res.render('index.html');
});





const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

