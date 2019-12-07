import jwt from 'jsonwebtoken';

process.env.TOKEN_SECRET = 'my-development-secret';
export function generateJWT(user){
  const tokenData = {username: user.username, id: user._id};
  return jwt.sign({user: tokenData},process.env.TOKEN_SECRET );
}

export function requireLogin(req, res,  next){
  const token = decodeToken(req);
  if(!token){
    return res.status(401).json({message: 'You must be logged in!'});
  }
  next();
}


export function decodeToken(req) {
  const token = req.headers.authentication || req.headers['authorization'] ;
  // if there is no token attached to the header return null
  if(!token){
    return null;
  }

  // otherwise decrypt that token (the secret is needed to decrypt the token)
  try{
    return jwt.verify(token, process.env.TOKEN_SECRET);
  }catch(error){
    return null;
  }


}


export function getUsername(req){
  const token = decodeToken(req);
  if(!token){
    return null;
  }
  return token.user.username;
}

export function getUserId(req){
  const token = decodeToken(req);
  if(!token){
    return null;
  }
  return token.user.id;
}