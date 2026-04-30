const userModel = require('../Models/user');

exports.register = async(req,res)=>{
    try{
        const {name,email,photoUrl} = req.body;

        const userExist = await userModel.findOne({email:email});

        if(!userExist){

            //  Default role
            let role = "user";

            //  my email is admin 
            if(email === "anushkasingh2641@gmail.com"){
                role = "admin";
            }

            let newUser = new userModel({
                name,
                email,
                photoUrl,
                role   
            });

            await newUser.save();

            return res.status(200).json({
                message:"User registered successfully",
                user:newUser
            })
        }

        return res.status(200).json({
            message:"Welcome Back",
            user:userExist
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            error:'Server error', 
            message: err.message
        });
    }
}
