const Bucket = require("./model");
const { categoryValidate } = require("./categoryschema");
const errorCreate = require("http-errors");
const Product = require('./../product/controller');

const addBucket = async (req, res, next) => {
  try {
    const result = await bucketValidate.validateAsync(req.body);
    const isExist = await Bucket.findOne({name:result.bucketName});
    if (isExist)
     throw errorCreate.BadRequest(`${result.bucketName} is already exist`);
     result.isActive = 1;
    const bucket = new Bucket(result);
    const bucketAdd = await bucket.save();
    res.send(bucketAdd);
  } catch (error) {
    if (error.isJoi == true) error.status = 422;
    next(error);
  }
};


module.exports = {
  addBucket
  
};
