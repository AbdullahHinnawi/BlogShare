//const express = require('express');
import express from 'express';
const router = express.Router();



router.get('/api/user',function(req,res){
  return res.status(200).json({message:'HEllo WOrld'});
} );

//module.exports= router;
export default router;
//module.exports= User;