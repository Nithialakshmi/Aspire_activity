

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
    const { username, password, email, mobile } = req.body;

 
    const userData = { username, password, email, mobile };
    fs.writeFile('userdata.json', JSON.stringify(userData), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server Error');
        }
    
        res.send("<script>alert('Data submitted successfully!'); window.location.href = '/';</script>");
    });
});


const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
