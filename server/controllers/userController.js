import userModel from '../model/userSchema.js'

export async function userAdd(req,res,next){
    try {
        let obj =req.body;
        await userModel.create({
            name:obj.name,
            email:obj.email,
            phoneno:obj.phone,
            dob:obj.dob,
            profileImg:obj.photo
        })
        res.json({"status":"success"})
    } catch (error) {
        console.log(error.message);
    }
}


export async function userLists(req,res,next){
    try {
        const users=await userModel.find()
        res.json({"users":users})
    } catch (error) {
        console.log(error.message);
    }
}