const express = require('express');
const ejs = require('ejs');

const app = express();
const PORT = 8000;

// Set Template Engine 
app.set('view engine', 'ejs')

app.get("/", (req, res) => {

    // res.send("<h1> Hello World </h1>");

    // res.render("index");

    // res.render("index", {
    //     'firstName': 'Rohan',
    //     'lastName': 'Patel'
    // });

    // let login = true;
    // res.render("index", {
    //     login: login
    // })

    let student = {
        "20CE001": "BHARGAV",
        "20CE015": "AYUSH",
        "20CE016": "KRUTIK",
        "20CE018": "BHARGAVI",
        "20CE020": "AKSH",
    };
    res.render("index", {
        stu: student
    })
});

app.listen(PORT, () => {
    console.log(`Server is Listening at ${PORT} Port.`);
})