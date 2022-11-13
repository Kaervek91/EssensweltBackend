const express = require('express');
const router = express.Router();

    
   
    //const device = require('../controllers/device-controller.js');
    
    // CHECK THIS WEB AND COMPLETE FOR THE DIFERENT CRUD https://coursework.vschool.io/mongoose-crud/
    /*router.get('/devices', device.getDevices);
    router.get('/devices/:id', device.getDeviceById);
    router.post('/devices', device.createDevice);
    router.put('/devices/:id', device.updateDeviceById);
    router.delete('/devices', device.removeDevices);
    router.delete('/devices/:id', device.removeDeviceById);
    */
    /** DEVELOPMENT **/
    /*const Device = require('../models/devices.js');
    router.post('/matrixDevicesDev', (req,res)=>{
        let body = req.body;
        console.log(req.body);
        Device.create(body, (err, device) => {
            if (err) throw err;
            res.status(200).json(device);
        })
        
    })
    /*
    // Update a Data
    router.put('/device/:id', (req,res)=>{
        model.findByIdAndUpdate(
            // the id of the item to find
            req.params.id,
             // the change to be made. Mongoose will smartly combine your existing 
            // document with this change, which allows for partial updates too
            req.body,
            // an option that asks mongoose to return the updated version 
            // of the document instead of the pre-updated one.
            {new:true}, 
             // Handle any possible database errors
            (err, todo)=>{
                if (err) return res.status(500).send(err);
                res.send(todo);
        });
    })
    router.delete('/device/:id', (req,res) => {
        let id = req.params.id;
        
        model.find({"_id": id }, (err, task) => {
            if (err) throw err;
            model.remove({_id: id}, (err,task) => {
                if (err) throw err;
                res.status(200).send('Deleted');
            })
        })
        
    })
    router.delete('/device/', (req,res) => {
        model.find({},(err, task) => {
            if (err) throw err;
            model.remove({}, (err,task) => {
                if (err) throw err;
                res.status(200).send('Deleted All');
            })
        })
        
    })
    // OBTAIN DATA FROM OTHERS APIs
    const fetch = require('node-fetch');
    router.get('/users', async (req, res) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const users = await response.json();
        console.log('USERS');
        res.send(users);
    })*/
    


module.exports = router;