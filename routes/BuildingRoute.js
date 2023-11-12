const express = require('express');

const feedController = require('../controller/BuildingController');

const router = express.Router();

// get all buildings
router.get('/buildings', feedController.getPosts);

//  add a building
router.post('/building', feedController.createPost);

// add 
router.post("/visitor", feedController.addVisitor);

router.get("/building/:id", feedController.getBuildingById);


module.exports = router;