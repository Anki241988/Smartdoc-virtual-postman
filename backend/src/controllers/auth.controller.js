 function register(req,res){

     const{name,email,password}=req.body

     res.status(200).send('registration endpoint reached')

}

export {register}