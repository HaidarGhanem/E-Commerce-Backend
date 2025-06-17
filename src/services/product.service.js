const Product = require('../db/mongo/models/Products')

class ProductServices {
    static async create(productData){
        return await Product.create(productData).save()
    }
    static async findByName(productName){
        return await Product.findOne({name: productName})
    }
    static async findByCategory(type){
        return await Product.find({category: type})
    }
    static async findAll(){
        return await Product.find()
    }
    static async update(productName , newData){
        return await Product.findOneAndUpdate({name: productName}, newData , {new: true})
    }
    static async delete(productName){
        return await Product.findOneAndDelete({name: productName})
    }
}

module.exports = ProductServices