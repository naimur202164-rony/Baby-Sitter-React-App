const classes=require('./classController');





exports.getAllClasses=async(req,res,next)=>{
    res.status(200).json({
        success:true,
        message:"Hello From ther classes"
    })
}