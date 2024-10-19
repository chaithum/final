const express = require('express');
const { getAllRestaurants,
    addRestaurants,
    getRestaurantById,
    getRestaurantByCity,
    getRestaurantByZipCode,
    getRestaurantByName,
    getRestaurantByArea,
    getRestaurantByState,
    updateRestaurant,
    deleteRestaurant,
} =  require('../controller/Restaurant-controller');


const RestaurantRouter= express.Router();

RestaurantRouter.get('/getallrestaurents',getAllRestaurants);
RestaurantRouter.post('/addrestaurant',addRestaurants);
RestaurantRouter.get('/getrestaurantbyid',getRestaurantById);
RestaurantRouter.get('/getrestaurantbycity',getRestaurantByCity)
RestaurantRouter.get('/getrestaurantbyzipcode',getRestaurantByZipCode);
RestaurantRouter.get('/getRestaurantbyname',getRestaurantByName);
RestaurantRouter.get('/getRestaurentbyarea',getRestaurantByArea);
RestaurantRouter.get('/getrestaurantbystate',getRestaurantByState);
RestaurantRouter.put('/updateRestaurant',updateRestaurant);
RestaurantRouter.delete('/deleterestaurents',deleteRestaurant);

module.exports= RestaurantRouter;

