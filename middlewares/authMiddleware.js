module.exports.requireAuth = function(req,res, next){
   if(!req.signedCookies.userId){
    res.redirect('/auth/login');
    return;
   }
   
   var user7 = db.get('users').find({ 
      id :req.signedCookies.userId
   }).value();
  

   if(!user7){
    res.redirect('/auth/login');
    return; 
   }

   res.locals.user7 = user7;


next();
};