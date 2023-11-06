const express = require('express');
const testDate = require('../midellwere/date');
const indexRoute = express.Router();

indexRoute.get('/',testDate,(req,res)=>{
    res.render('home')
})

indexRoute.get('/contact',testDate,(req,res)=>{
    res.render('contact')
})

indexRoute.get('/service',testDate,(req,res)=>{
    res.render('service')
})



module.exports = indexRoute