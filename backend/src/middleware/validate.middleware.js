

function validateMiddleware(schema) {
  return(req,res,next)=>{

    const result= schema.safeParse(req.body)

    if(result.success===false){

        return res.status(400).json("validation failed")

    }

   req.body= result.data

    next()
    

  }

}
export default validateMiddleware
