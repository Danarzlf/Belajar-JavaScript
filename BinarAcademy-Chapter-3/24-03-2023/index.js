//express untuk memudahkan http server
// express memudahkan server

// import / panggil package yg kita mau pakai pada aplikasi kita
const express = require('express');
const fs = require("fs");
const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// built in function di node js(?)
// proses baca file json nya dengan FS module, nah dibantu dengan JSON.parse
let persons = JSON.parse(fs.readFileSync(`${__dirname}/person.json`))

// url utamna dari app
// req = request
// res = response

// get post http method
// "/" = URL
app.get('/', (req, res) => {
    res.send('Hello FSW 3 luar biasa dehh !! dari server niih')
})

app.post('/', (req, res) => {
    res.send('Kita bisa ngelakuin post niii widiii kerenn')
})

app.get('/person', (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            persons: persons
        }
    })
})

   
app.post('/person', (req, res) => {

    console.log(persons.length - 1)
    // const newId = persons[persons.length - 1].id + 1;
    const newId = persons.length - 1 + 10;
    const newPerson = Object.assign({ id: newId }, req.body)

    persons.push(newPerson);
    fs.writeFile(
        `${__dirname}/person.json`,
        JSON.stringify(persons),
        errr => {
            res.status(201).json({
                status: 'success',
                data: {
                    person: newPerson
                }
            })
        }
    )
})

// memulai http server 
app.listen(PORT, () => {
    console.log(`App running on localhost: ${PORT}`)
})



//STEP
// npm init
// npm install express
// index.js
// di package.json ditambah "start": "node index.js",
// npm run start
// npm install nodemon -> akan restart server (otomatis jalan, biar ga on off in npm run start)
// di package.json ditambah "dev": "nodemon index.js"
// npm run dev (langsung ini buat jalanin, biar nyambung demon nya)