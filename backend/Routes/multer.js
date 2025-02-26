const express = require("express");
const router = express.Router();
const multer =require('multer')
const upload=multer({dest:'uploads/'});
const cloudinary=require('../middleware/cloudnary')

router.post('/createPost',upload.any(),async (req,res)=>{
    try{
        console.log(req.files)
        const result=await cloudinary.uploader.upload(req.files[0].path,{ resource_type: "raw" })
        console.log(result.secure_url)
        res.json({message:'success'})
    }
    catch(err){
        console.log(err)
    }
})

module.exports=router


// const express = require("express");
// const router = express.Router();
// const multer =require('multer')
// const upload=multer({dest:'uploads/'});
// const cloudinary=require('../middleware/cloudnary')

// router.post('/createPost',upload.single("file"),async (req,res)=>{
//     try{
//         console.log(req)
//         const result=await cloudinary.uploader.upload(req.file.path)
//         console.log(result.secure_url)
//         res.json({message:'success'})
//     }
//     catch(err){
//         console.log(err)
//     }
// })

// module.exports=router
