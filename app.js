let trips = []

const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.use(express.urlencoded({extended:true}))

app.engine('mustache', mustacheExpress())
app.set('views','./views')
app.set('view engine', 'mustache')

app.get('/',(req,res)=>{
    res.render('index')


})

app.get('/trips', (req,res)=>{
    res.render('trips' , {allTrips: trips })
})

app.post('/trips/add-trip',(req,res)=> {

    let trip = {desti: req.body.tripDesti, dateDepart: req.body.tripDepart, dateReturn: req.body.tripReturn}
    trips.push(trip)
    res.render('trips',{allTrips: trips})
})




app.listen(8080, ()=>{
    console.log('Trips server is running up that hill...')
})