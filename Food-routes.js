 const express = require('express');
const {addFoodItem,getFoodItems,getFoodItemById,updateFoodItem,deleteFoodItem} =  require('../controller/Food-controller');


const FoodRouter= express.Router();

FoodRouter.post('/addfooditem',addFoodItem);
FoodRouter.get('/getfooditems',getFoodItems);
FoodRouter.get('/getfooditembyid',getFoodItemById);
FoodRouter.put('/updatefooditem',updateFoodItem);
FoodRouter.delete('/deletefooditem',deleteFoodItem);

module.exports= FoodRouter;

