const {ReviewSchema} = require("../models/product");
const addReviews = async (req, res) => {
  try {
    const value = await ReviewSchema(req.body).save();
    res.send(value);
  } catch (e) {
    res.send(e);
  }
};
const deletereviews= async(req,res)=>{
    try{
        const value = await ReviewSchema.deleteOne(req.body);
        res.send(value);
    }
    catch(e){
        res.send(e);
    }
}
const populatereviews = async(req,res) => {
    try{
        //ReviewSchema.set('toJSON',{virtuals:true})
        const allreviews = await ReviewSchema.find().populate("uid");
        res.send(allreviews);
    }
    catch(e){
        res.send(e);
    }
}
module.exports = {
    addReviews,
    deletereviews,
    populatereviews
}
