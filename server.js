let express = require('express')
let bodyParser = require('body-parser')
let pg = require('pg')
const PORT = 4000

let pool = new pg.Pool({
    host: 'localhost',
    user: 'sadbuns',
    password: 'sadsad',
    database: 'purrentals',
    max: 19, // max 10 connections
    port: 5432
})

// express instance 
let app = express()

// body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

// ------------ REST API ------------ //

// C U S T O M E R S

// functions


// ---------------------------------- //

// P U R R E N T S
// worker
// app.get('/worker/')

// stats
// app.get('/animals/popular')
// app.get('/animals/popular-rented')

// animals
// app.put
// app.delete

// POST ANIMALS
app.post('/animals', function (req, res) {
    var fname = req.body.fname
    var addr = req.body.address
    var phone = req.body.phone

    pool.connect((err, db, done) => {
        if (err)
            return console.error('error fetching data\n' + err)
        else {
            // db.query("select * from animal", (err, table) => {
            if (err)
                return console.log(err)
            else {
                // console.table(table)
                console.log('connection success, POST success')
            }

        }
    })
})

app.post('/api/customers/signup', function (req, res) {
    let custid = req.body.custid
    let name = req.body.name
    let address = req.body.address
    let pnum = req.body.pnum
    pool.connect((err, db, done) => {
        if (err) {
            console.error('error fetching data\n' + err)
            res.status(500).send()
        }
        else {
            db.query(`INSERT INTO Customer VALUES(${custid}, ${name}, ${address}, ${pnum}`),
                (err, table) => {
                    if (err)
                        return res.status(500).send(err)
                    else {
                        // console.table(table)
                        console.log('connection success')
                        res.status(200).send()

                    }
                }
        }
    })

    // console.log('value from request body: '+custid)
    // console.log('value from request body: '+name)
    // console.log('value from request body: '+address)
    // console.log('value from request body: '+pnum)

    // res.status(200).send()
})
/* hi baby */

app.post('/api/customers/login', function (req, res) {
    console.log('request body: ' + req.body.custid);
    let custid = req.body.custid
    console.log('connection success')

    // res.status(200).send(custid)
    pool.connect((err, db, done) => {
        if (err) {
            console.error('error fetching data\n' + err)
            res.send(500, err)
            // res.status(500).send()
        }
        else {
            db.query(`select * from customer where custid=${custid}`, (err, table) => {
                if (err)
                    return res.send(500, err)
                // res.status(500).send(err)
                else {
                    // console.table(table)
                    console.log('connection success')
                    res.status(200).send(custid)

                }
            })
        }
    })
})

// customers
// POST CUSTOMERS
app.post('/customers', function (req, res) {
    var fname = req.body.fname
    var addr = req.body.address
    var phone = req.body.phone

    pool.connect((err, db, done) => {
        if (err)
            return console.error('error fetching data\n' + err)
        else {
            db.query("select * from animal", (err, table) => {
                if (err)
                    return console.log(err)
                else {
                    console.table(table)
                    console.log('connection success')

                }
            })
        }
    })
})

// member
// app.put

// GET
app.get('/animals', (req, res) => {
    pool.connect((err, db, done) => {
        if (err)
            return console.error('error fetching data\n' + err)
        db.query("select * from animal", (err, table) => {
            if (err)
                return console.log(err)
            res.json(table)
        })
        db.query("select * from animal", (err, table) => {
            if (err)
                return console.log(err)
            res.json(table)
        })
    })
})

app.get('/', (req, res) => {
    res.send('HALLO')
})

app.listen(PORT, () => console.log('Server starting on port ' + PORT))
