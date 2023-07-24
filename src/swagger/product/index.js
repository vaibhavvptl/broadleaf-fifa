const getAllProducts=require('./getAllProducts')

module.exports={
    '/products':{
        ...getAllProducts
    }
}