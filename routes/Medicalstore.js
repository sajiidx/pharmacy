const express = require('express')
const router = express.Router()
const axios = require('axios')

const {index} = require('../controllers/product')
const AuthMedicalstore = require('../controllers/AuthMedicalstore')
const { json } = require('body-parser')

router.get('/registration', function(req, res , next){
    res.render('medicalstore_reg.ejs')
})
router.get('/', function(req, res , next){
    res.render('medicalstore.ejs')
})
router.get('/login', function(req, res , next){
    res.render('medicalstore_login.ejs')
})
router.get('/home',async function(req, res, next){
    const request = await axios.get('http://localhost:3000/product');
    console.log(request.data.data)
    var products = request.data.data
    res.render('medicalstore_home.ejs',{products})
})

router.post('/registration', AuthMedicalstore.register)
router.post('/login', AuthMedicalstore.login)
module.exports = router