import {StringUtil} from '../string-util';
import express from 'express';
const router = express.Router();




router.post('/api/register',function(req,res){
  const validation = validate(req.body);
  if(!validation.isValid){
    return res.status(400).json({message: validation.message});
  }
  const user = {
    username: req.username.toLowerCase(),
    password: req.body.password
  };
 window.console.log(user);
 return res.status(201).json();

} );


function validate(body){
  let errors = '';
  if(StringUtil.isEmpty(body.username)){
    errors += 'Username is required.';
  }
  if(StringUtil.isEmpty(body.password)){
    errors += 'Password is required.'
  }

  return {
    isValid: StringUtil.isEmpty(errors),
    message: errors
  }
}
module.exports= router;